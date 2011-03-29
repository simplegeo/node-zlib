var assert = require('assert');
var Buffer = require('buffer').Buffer;
var zlib = require('../lib/zlib');

exports['test inflate fail'] = function(beforeExit) {
    var compressed = new Buffer('\x78\x80\x9c\xab\x56\x4a\x93\xaf\x46\x00\x1b\xa9\x02\x77\x92\x0f', 'binary');
    assert.throws(function() { var output = zlib.inflate(compressed); },
        /incorrect header check/);

    var compressed = new Buffer('\x78\x9c\xab\x56\x4a\x2f\xca\x4c\x51\xb2\x8a\x56\x52\xa0\x10\x28\xe9\x8c\x1a\x31\x6a\xc4\xa8\x11\xa3\x46\x8c\x1a\x31\x6a\xc4\xa8\x11\xa3\x46\x8c\x1a\x31\x6a\x04\x12\x50\x04\x02\x2a\x18\x01\x01\x64\x1b\x81\x64\x06\xdc\x10\xd2\x8c\x50\x44\x36\x02\x66\x06\x05\xae\x80\x99\x41\x72\x8c\x60\x9a\x41\x46\xa4\x0e\x0e\x23\x80\x81\xaa\x40\xa9\x11\x0a\x28\x46\x28\x52\xe6\x0a\x45\x0a\x8c\x40\x0e\x10\xf2\xb3\x19\x15\x8c\x80\x1b\x42\x69\x66\x57\x54\x54\xa6\xbc\xbc\xa0\x82\x11\x43\xb3\xe0\x1b\x42\x46\xa8\x50\xc1\x15\x2a\xa4\x1a\x42\xb9\x47\x54\x95\x62\x75\x94\xb2\x53\x2b\x8b\x41\x03\x19\x40\xe3\x7c\x23\x80\x84\x7b\x08\x90\xf0\x0e\x02\x12\xae\xce\x4a\xb1\xb5\x00\x83\x32\x27\xf3', 'binary');
    var output = zlib.inflate(compressed);
    assert.equal(output.toString(), '{"grid":["                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                            !!!!                ","                                            !!!!!!!!!!          ","                                             !!!!!!!!!!!        ","                                           ! !!!!!!!!!!!!       ","                                             !!!!!!!!!!!!!      ","                                              !!!!!!!!!!!!!     ","                                                !!!!!!!!!!!     ","                                                !!!!!!!!!!!     ","                                                 !  !!!!!!!     ","                                                    !!!!!!!    !","                                                 !  !!!!!!!!   !","                                                 !   !!!!!!!!!!!","                                                       !!!!!!!!!","                                                         !!!!!!!","                                                             !!#","                                                               #","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","              $                                                 ","               $$                                               ","                                                               %"],"keys":["","MX","GT","KR","EC"]}');
};
