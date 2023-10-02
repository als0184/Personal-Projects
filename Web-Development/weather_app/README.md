---

# Automated Weather Notifications

## Overview


---

The `Automated Weather Notifications` project, as captured in the `weather_nfs.py` script, is designed to provide users with timely weather updates every morning at 6:00 AM. The essence is to keep users informed about the day's weather, aiding in planning activities accordingly.

The script can be found in the following directory on my GitHub: `Personal-Projects/Scripts/weather_nfs`.

---

### Current State

Currently, the script is designed to run locally. It fetches weather data from the Tomorrow.io API, processes this information, and then sends out notifications via the Twilio API to pre-configured phone numbers.

### Future Plans

While the tool is serving its purpose as a standalone script, there is an intention to further develop and enhance its capabilities:

1. **Web Hosting**: In the future, we aim to host the script on a web server. This transition will allow for more flexibility, such as the potential for users to interact with the script via a web interface, request updates on-demand, or configure their own alert timings.
   
2. **Integration with Flask**: To facilitate web hosting and open the door for a more interactive experience, there's a plan to integrate the tool with the Flask web framework. Flask will provide the necessary infrastructure to serve the tool over the web and potentially expand its feature set.

3. **Avoiding Local Dependency**: Hosting the tool will eliminate the need for users to run the script locally. It will be accessible from anywhere, enhancing its usability and convenience.

## Project Hosting Transition

Upon completion of the web-hosting phase for the `Automated Weather Notifications` project, the hosted version will reside in the directory you're currently viewing this README in. However, it's important to note that the original `weather_nfs.py` script will continue to remain in its initial location at `Personal-Projects/Scripts/weather_nfs`.

---