const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const legacy = require('zigbee-herdsman-converters/lib/legacy');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
    fingerprint: [{modelID: 'TS0601', manufacturerName: '_TZE200_ft523twt'}],
    model: 'R7049',
    vendor: 'Woox',
    description: 'Smart smoke alarm',
    meta: {timeout: 30000, disableDefaultResponse: true},
    fromZigbee: [legacy.fromZigbee.R7049_status, fz.ignore_tuya_set_time, fz.ignore_time_read],
    toZigbee: [legacy.toZigbee.R7049_silenceSiren, legacy.toZigbee.R7049_testAlarm, legacy.toZigbee.R7049_alarm],
    exposes: [e.battery_low(),
        e.binary('smoke', ea.STATE, true, false).withDescription('Smoke alarm status'),
        e.binary('test_alarm', ea.STATE_SET, true, false).withDescription('Test alarm'),
        e.enum('test_alarm_result', ea.STATE, ['checking', 'check_success', 'check_failure', 'others'])
            .withDescription('Test alarm result'),
        e.enum('battery_level', ea.STATE, ['low', 'middle', 'high']).withDescription('Battery level state'),
        e.binary('alarm', ea.STATE_SET, true, false).withDescription('Alarm enable'),
        e.binary('fault_alarm', ea.STATE, true, false).withDescription('Fault alarm status'),
        e.binary('silence_siren', ea.STATE_SET, true, false).withDescription('Silence siren')],
};

module.exports = definition;