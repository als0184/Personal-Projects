"""
================================================================================
Project:        Automated Weather Notifications
File:           weather_nfs.py
Description:    A Python script designed to deliver timely weather updates every
                morning at 6:00 AM. The tool ensures users stay informed about the
                day's weather, helping them plan their day accordingly.
Date:           09/28/2023

Author:         Austin Lee
Email:          als0184@auburn.edu
GitHub:         https://github.com/als0184
================================================================================

Usage:
--------------
To effectively use this script:

1. Ensure your environment has the necessary Python libraries installed.

2. Set up the Tomorrow.io API key:
   - Create a new file in the same project directory named `secrets.py`.
   - Inside `secrets.py`, include your Tomorrow.io API key in the following format:
     Python: API_KEY = "YOUR_API_KEY_HERE"
   Replace `YOUR_API_KEY_HERE` with your actual API key. Ensure that `secrets.py` is added to your `.gitignore` file
   to prevent accidentally sharing your key when pushing to version control.

3. Set up the Twilio API credentials:
   - Create a Twilio account and obtain your Account SID, Auth Token, and a Twilio phone number.
   - Create a new file in the same project directory named `secrets.py`.
   - Inside `secrets.py`, include your Twilio credentials and phone numbers in the following format:
     Python: sid = "YOUR_TWILIO_ACCOUNT_SID"
             token = "YOUR_TWILIO_AUTH_TOKEN"
             from_sms = "YOUR_TWILIO_PHONE_NUMBER"
             to_sms = "RECIPIENT_PHONE_NUMBER_1"
             # Add more recipient phone numbers as needed
             # to_sms2 = "RECIPIENT_PHONE_NUMBER_2"
   Replace the placeholders with your actual Twilio credentials and recipient phone numbers.

4. Schedule the script to run at 6:00 AM using cron (Unix) or Task Scheduler (Windows).

--------------------------------------------------------------------------------

Additional Notes:
- This script employs the Tomorrow.io weather forecast API, for its precise and timely weather predictions.
  For more info on Tomorrow.io Weather API follow this link (https://docs.tomorrow.io/reference/welcome).

- This script uses the Twilio API for sending SMS notifications. Visit the Twilio website (https://www.twilio.com/) to
  create an account and obtain the necessary credentials.

- While the script is configured for morning alerts, with modifications to the API parameters, you can fetch different
  types of data or receive updates at different intervals.
--------------------------------------------------------------------------------

"""

# Import statements here
import requests
import secrets
import json
import schedule
import time
from twilio.rest import Client
from datetime import date
from datetime import datetime

# Main code here
# Define the location variables for Auburn Alabama for the API URL
latitude = 32.609081
longitude = -85.481728
location = f"{latitude},{longitude}"


def get_weather():
    url = f"https://api.tomorrow.io/v4/weather/realtime?location={location}"
    headers = {
        'accept': 'application/json',
        # import apikey from secrets.py
        'apikey': secrets.API_KEY,
    }
    response = requests.get(url, headers=headers)
    print(response.text)
    return response


def temp_convert(celsius):
    return (celsius * 9/5) + 32


def mph_convert(mps):
    return mps * 2.23694


def get_sms(message):
    account_sid = secrets.sid
    auth_token = secrets.token
    client = Client(account_sid, auth_token)
    # Requests to send message to different numbers
    client.messages.create(
        body=message,
        from_=secrets.from_sms,
        to=secrets.to_sms,
    )
    '''''
    client.messages.create(
        body=message,
        from_=secrets.from_sms,
        to=secrets.to_sms2,
    )
    '''''
    print("Messages have been sent!")


def send_weather_nfs():
    weather_info = get_weather()

    if weather_info.status_code == 200:
        data = json.loads(weather_info.text)

        # Extract specific data from the json response
        temp_in_celsius = data["data"]["values"]["temperature"]
        # Function call to convert Celsius into Fahrenheit
        temp_in_fahrenheit = temp_convert(temp_in_celsius)
        humidity = data["data"]["values"]["humidity"]
        cloud_cover = data["data"]["values"]["cloudCover"]
        wind_speed = data["data"]["values"]["windSpeed"]
        # Function call to convert m/s to mph
        wind_speed_mph = mph_convert(wind_speed)
        wind_gust = data["data"]["values"]["windGust"]
        # Function call to convert m/s to mph
        wind_gust_mph = mph_convert(wind_gust)
        dew_point = data["data"]["values"]["dewPoint"]
        # Function call to convert Celsius into Fahrenheit
        dew_in_fahrenheit = temp_convert(dew_point)
        visibility = data["data"]["values"]["visibility"]
        weather_code = data["data"]["values"]["weatherCode"]
        uv_index = data["data"]["values"]["uvIndex"]
        precipitation_probability = data["data"]["values"]["precipitationProbability"]
        today = date.today()
        now = datetime.now()
        current_time = now.strftime("%H:%M")

        weather_nfs_body = (
            f"Good Morning,\n\n"
            f"Weather for Auburn, Alabama\n"
            f"-----------------------------------\n"
            f"Date: {today}\n"
            f"Time: {current_time}\n\n"
            f"- Temperature: {temp_in_fahrenheit:.2f}°F\n"
            f"- Humidity: {humidity}%\n"
            f"- Precipitation Probability: {precipitation_probability}%\n"
            f"- Cloud Cover: {cloud_cover}%\n"
            f"- Wind Speed: {wind_speed_mph:.2f} mph\n"
            f"- Wind Gust: {wind_gust_mph:.2f} mph\n"
            f"- Dew Point: {dew_in_fahrenheit:.2f}°F\n"
            f"- Visibility: {visibility} miles\n"
            f"- Weather Code: {weather_code}\n"
            f"- UV Index: {uv_index}\n\n"
            f"Have a Great Day!\n"
        )

        get_sms(weather_nfs_body)


def main():
    # Schedule the job to run at 06:00 AM
    schedule.every().day.at("06:00").do(send_weather_nfs)

    # Run the scheduling loop
    while True:
        schedule.run_pending()
        time.sleep(1)


if __name__ == "__main__":
    main()
