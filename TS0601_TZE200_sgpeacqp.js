const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const legacy = require('zigbee-herdsman-converters/lib/legacy');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const tuya = require('zigbee-herdsman-converters/lib/tuya');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
        fingerprint: [{modelID: 'TS0601', manufacturerName: '_TZE200_sgpeacqp'}],
        model: 'TS0601_smart_human_presence_sensor_1',
        vendor: 'TuYa',
        description: 'Smart Human presence sensor',
        fromZigbee: [legacy.fz.tuya_smart_human_presense_sensor],
        toZigbee: [legacy.tz.tuya_smart_human_presense_sensor],
        whiteLabel: [
            tuya.whitelabel('TuYa', 'ZY-M100-L', 'Ceiling human breathe sensor', ['_TZE204_ztc6ggyl']),
        ],
        exposes: [
            e.illuminance_lux(), e.presence(),
            e.numeric('target_distance', ea.STATE).withDescription('Distance to target').withUnit('m'),
            e.numeric('radar_sensitivity', ea.STATE_SET).withValueMin(0).withValueMax(9).withValueStep(1)
                .withDescription('sensitivity of the radar'),
            e.numeric('minimum_range', ea.STATE_SET).withValueMin(0).withValueMax(9.5).withValueStep(0.15)
                .withDescription('Minimum range').withUnit('m'),
            e.numeric('maximum_range', ea.STATE_SET).withValueMin(0).withValueMax(9.5).withValueStep(0.15)
                .withDescription('Maximum range').withUnit('m'),
            e.numeric('detection_delay', ea.STATE_SET).withValueMin(0).withValueMax(10).withValueStep(0.1)
                .withDescription('Detection delay').withUnit('s'),
            e.numeric('fading_time', ea.STATE_SET).withValueMin(0).withValueMax(1500).withValueStep(1)
                .withDescription('Fading time').withUnit('s'),
            // e.text('cli', ea.STATE).withDescription('not recognize'),
            e.enum('self_test', ea.STATE, Object.values(legacy.tuyaHPSCheckingResult))
                .withDescription('Self_test, possible results: checking, check_success, check_failure, others, comm_fault, radar_fault.'),
        ],
};

module.exports = definition;