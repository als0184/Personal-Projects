
# Automated Weather Notifications

Automated Weather Notifications is a Python script designed to deliver timely weather updates every morning at 6:00 AM. This tool ensures users stay informed about the day's weather, helping them plan their day accordingly.

### Project Details:
- **Date:** 09/28/2023
- **Author:** Austin Lee
- **Email:** [als0184@auburn.edu](mailto:als0184@auburn.edu)
- **GitHub:** [https://github.com/als0184](https://github.com/als0184)

## Usage

### 1. Setup Environment:
Ensure your environment has the necessary Python libraries installed.

### 2. Tomorrow.io API Setup:
- Create a new file in the same project directory named `secrets.py`.
- Inside `secrets.py`, include your Tomorrow.io API key in the format:
```python
API_KEY = "YOUR_API_KEY_HERE"
```
Replace `YOUR_API_KEY_HERE` with your actual API key. Ensure that `secrets.py` is added to your `.gitignore` file to prevent accidentally sharing your key when pushing to version control.

### 3. Twilio API Setup:
- Create a Twilio account and obtain your Account SID, Auth Token, and a Twilio phone number.
- Inside the existing `secrets.py`, include your Twilio credentials and phone numbers in the format:
```python
sid = "YOUR_TWILIO_ACCOUNT_SID"
token = "YOUR_TWILIO_AUTH_TOKEN"
from_sms = "YOUR_TWILIO_PHONE_NUMBER"
to_sms = "RECIPIENT_PHONE_NUMBER_1"
# Add more recipient phone numbers as needed
# to_sms2 = "RECIPIENT_PHONE_NUMBER_2"
```
Replace the placeholders with your actual Twilio credentials and recipient phone numbers.

### 4. Schedule Execution:
Schedule the script to run at 6:00 AM using cron (Unix) or Task Scheduler (Windows).

## Additional Notes
- This script employs the [Tomorrow.io weather forecast API](https://docs.tomorrow.io/reference/welcome) for its precise and timely weather predictions.
  
- The script uses the Twilio API for sending SMS notifications. Visit the [Twilio website](https://www.twilio.com/) to create an account and obtain the necessary credentials.
  
- While the script is configured for morning alerts, with modifications to the API parameters, you can fetch different types of data or receive updates at different intervals.

---