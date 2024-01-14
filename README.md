# TS0601_TZE200_sgpeacqp

This is a custom converter that works in Zigbee2MQTT (until the the device is officially added) for Moes presence sensor Model TS0601, manufacturerName _TZE200_sgpeacqp, drywall version.

Here is how you add the custom converter in Home Assistant using the Zigbee2MQTT addon:
1) Remove the device if it is already added in Zigbee2MQTT;
2) With a file editor (Studio Code Server etc.) add the js file in the folder config/zigbee2mqtt (the folder should already be there);
3) Open the addon Zigbee2MQTT and define the custom converter. See the picture:
   ![image](https://github.com/Jtef/TS0601_TZE200_sgpeacqp/assets/6143681/e15c6e54-e918-4390-b162-1b7a38ff4d90)
  
4) Restart Zigbee2MQTT addon;
5) Start pairing the device.

Enjoy!
