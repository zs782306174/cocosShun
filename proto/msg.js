/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.msg = (function() {

    /**
     * Namespace msg.
     * @exports msg
     * @namespace
     */
    var msg = {};

    msg.KV = (function() {

        /**
         * Properties of a KV.
         * @memberof msg
         * @interface IKV
         * @property {number|null} [k] KV k
         * @property {number|null} [v] KV v
         */

        /**
         * Constructs a new KV.
         * @memberof msg
         * @classdesc Represents a KV.
         * @implements IKV
         * @constructor
         * @param {msg.IKV=} [properties] Properties to set
         */
        function KV(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KV k.
         * @member {number} k
         * @memberof msg.KV
         * @instance
         */
        KV.prototype.k = 0;

        /**
         * KV v.
         * @member {number} v
         * @memberof msg.KV
         * @instance
         */
        KV.prototype.v = 0;

        /**
         * Creates a new KV instance using the specified properties.
         * @function create
         * @memberof msg.KV
         * @static
         * @param {msg.IKV=} [properties] Properties to set
         * @returns {msg.KV} KV instance
         */
        KV.create = function create(properties) {
            return new KV(properties);
        };

        /**
         * Encodes the specified KV message. Does not implicitly {@link msg.KV.verify|verify} messages.
         * @function encode
         * @memberof msg.KV
         * @static
         * @param {msg.IKV} message KV message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KV.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.k != null && Object.hasOwnProperty.call(message, "k"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.k);
            if (message.v != null && Object.hasOwnProperty.call(message, "v"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.v);
            return writer;
        };

        /**
         * Encodes the specified KV message, length delimited. Does not implicitly {@link msg.KV.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.KV
         * @static
         * @param {msg.IKV} message KV message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KV.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KV message from the specified reader or buffer.
         * @function decode
         * @memberof msg.KV
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.KV} KV
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KV.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.KV();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.k = reader.int32();
                    break;
                case 1:
                    message.v = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KV message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.KV
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.KV} KV
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KV.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KV message.
         * @function verify
         * @memberof msg.KV
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KV.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.k != null && message.hasOwnProperty("k"))
                if (!$util.isInteger(message.k))
                    return "k: integer expected";
            if (message.v != null && message.hasOwnProperty("v"))
                if (!$util.isInteger(message.v))
                    return "v: integer expected";
            return null;
        };

        /**
         * Creates a KV message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.KV
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.KV} KV
         */
        KV.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.KV)
                return object;
            var message = new $root.msg.KV();
            if (object.k != null)
                message.k = object.k | 0;
            if (object.v != null)
                message.v = object.v | 0;
            return message;
        };

        /**
         * Creates a plain object from a KV message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.KV
         * @static
         * @param {msg.KV} message KV
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KV.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.k = 0;
                object.v = 0;
            }
            if (message.k != null && message.hasOwnProperty("k"))
                object.k = message.k;
            if (message.v != null && message.hasOwnProperty("v"))
                object.v = message.v;
            return object;
        };

        /**
         * Converts this KV to JSON.
         * @function toJSON
         * @memberof msg.KV
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KV.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KV;
    })();

    msg.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof msg
         * @interface ILoginRequest
         * @property {number|null} [rpcid] LoginRequest rpcid
         * @property {string|null} [email] LoginRequest email
         * @property {string|null} [passWord] LoginRequest passWord
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof msg
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {msg.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest rpcid.
         * @member {number} rpcid
         * @memberof msg.LoginRequest
         * @instance
         */
        LoginRequest.prototype.rpcid = 0;

        /**
         * LoginRequest email.
         * @member {string} email
         * @memberof msg.LoginRequest
         * @instance
         */
        LoginRequest.prototype.email = "";

        /**
         * LoginRequest passWord.
         * @member {string} passWord
         * @memberof msg.LoginRequest
         * @instance
         */
        LoginRequest.prototype.passWord = "";

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof msg.LoginRequest
         * @static
         * @param {msg.ILoginRequest=} [properties] Properties to set
         * @returns {msg.LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link msg.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof msg.LoginRequest
         * @static
         * @param {msg.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rpcid != null && Object.hasOwnProperty.call(message, "rpcid"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.rpcid);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.email);
            if (message.passWord != null && Object.hasOwnProperty.call(message, "passWord"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.passWord);
            return writer;
        };

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link msg.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.LoginRequest
         * @static
         * @param {msg.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof msg.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.LoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.rpcid = reader.int32();
                    break;
                case 2:
                    message.email = reader.string();
                    break;
                case 3:
                    message.passWord = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof msg.LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                if (!$util.isInteger(message.rpcid))
                    return "rpcid: integer expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.passWord != null && message.hasOwnProperty("passWord"))
                if (!$util.isString(message.passWord))
                    return "passWord: string expected";
            return null;
        };

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.LoginRequest)
                return object;
            var message = new $root.msg.LoginRequest();
            if (object.rpcid != null)
                message.rpcid = object.rpcid | 0;
            if (object.email != null)
                message.email = String(object.email);
            if (object.passWord != null)
                message.passWord = String(object.passWord);
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.LoginRequest
         * @static
         * @param {msg.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rpcid = 0;
                object.email = "";
                object.passWord = "";
            }
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                object.rpcid = message.rpcid;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.passWord != null && message.hasOwnProperty("passWord"))
                object.passWord = message.passWord;
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof msg.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRequest;
    })();

    msg.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof msg
         * @interface IUserInfo
         * @property {number|null} [id] UserInfo id
         * @property {string|null} [eMail] UserInfo eMail
         * @property {string|null} [passWord] UserInfo passWord
         * @property {string|null} [name] UserInfo name
         * @property {number|null} [lv] UserInfo lv
         * @property {Array.<msg.IKV>|null} [goods] UserInfo goods
         */

        /**
         * Constructs a new UserInfo.
         * @memberof msg
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {msg.IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            this.goods = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfo id.
         * @member {number} id
         * @memberof msg.UserInfo
         * @instance
         */
        UserInfo.prototype.id = 0;

        /**
         * UserInfo eMail.
         * @member {string} eMail
         * @memberof msg.UserInfo
         * @instance
         */
        UserInfo.prototype.eMail = "";

        /**
         * UserInfo passWord.
         * @member {string} passWord
         * @memberof msg.UserInfo
         * @instance
         */
        UserInfo.prototype.passWord = "";

        /**
         * UserInfo name.
         * @member {string} name
         * @memberof msg.UserInfo
         * @instance
         */
        UserInfo.prototype.name = "";

        /**
         * UserInfo lv.
         * @member {number} lv
         * @memberof msg.UserInfo
         * @instance
         */
        UserInfo.prototype.lv = 0;

        /**
         * UserInfo goods.
         * @member {Array.<msg.IKV>} goods
         * @memberof msg.UserInfo
         * @instance
         */
        UserInfo.prototype.goods = $util.emptyArray;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof msg.UserInfo
         * @static
         * @param {msg.IUserInfo=} [properties] Properties to set
         * @returns {msg.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link msg.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof msg.UserInfo
         * @static
         * @param {msg.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.id);
            if (message.eMail != null && Object.hasOwnProperty.call(message, "eMail"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eMail);
            if (message.passWord != null && Object.hasOwnProperty.call(message, "passWord"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.passWord);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.lv != null && Object.hasOwnProperty.call(message, "lv"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.lv);
            if (message.goods != null && message.goods.length)
                for (var i = 0; i < message.goods.length; ++i)
                    $root.msg.KV.encode(message.goods[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link msg.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserInfo
         * @static
         * @param {msg.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.id = reader.int32();
                    break;
                case 1:
                    message.eMail = reader.string();
                    break;
                case 2:
                    message.passWord = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.lv = reader.int32();
                    break;
                case 5:
                    if (!(message.goods && message.goods.length))
                        message.goods = [];
                    message.goods.push($root.msg.KV.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfo message.
         * @function verify
         * @memberof msg.UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.eMail != null && message.hasOwnProperty("eMail"))
                if (!$util.isString(message.eMail))
                    return "eMail: string expected";
            if (message.passWord != null && message.hasOwnProperty("passWord"))
                if (!$util.isString(message.passWord))
                    return "passWord: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.lv != null && message.hasOwnProperty("lv"))
                if (!$util.isInteger(message.lv))
                    return "lv: integer expected";
            if (message.goods != null && message.hasOwnProperty("goods")) {
                if (!Array.isArray(message.goods))
                    return "goods: array expected";
                for (var i = 0; i < message.goods.length; ++i) {
                    var error = $root.msg.KV.verify(message.goods[i]);
                    if (error)
                        return "goods." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserInfo)
                return object;
            var message = new $root.msg.UserInfo();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.eMail != null)
                message.eMail = String(object.eMail);
            if (object.passWord != null)
                message.passWord = String(object.passWord);
            if (object.name != null)
                message.name = String(object.name);
            if (object.lv != null)
                message.lv = object.lv | 0;
            if (object.goods) {
                if (!Array.isArray(object.goods))
                    throw TypeError(".msg.UserInfo.goods: array expected");
                message.goods = [];
                for (var i = 0; i < object.goods.length; ++i) {
                    if (typeof object.goods[i] !== "object")
                        throw TypeError(".msg.UserInfo.goods: object expected");
                    message.goods[i] = $root.msg.KV.fromObject(object.goods[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserInfo
         * @static
         * @param {msg.UserInfo} message UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.goods = [];
            if (options.defaults) {
                object.id = 0;
                object.eMail = "";
                object.passWord = "";
                object.name = "";
                object.lv = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.eMail != null && message.hasOwnProperty("eMail"))
                object.eMail = message.eMail;
            if (message.passWord != null && message.hasOwnProperty("passWord"))
                object.passWord = message.passWord;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.lv != null && message.hasOwnProperty("lv"))
                object.lv = message.lv;
            if (message.goods && message.goods.length) {
                object.goods = [];
                for (var j = 0; j < message.goods.length; ++j)
                    object.goods[j] = $root.msg.KV.toObject(message.goods[j], options);
            }
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof msg.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfo;
    })();

    msg.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof msg
         * @interface ILoginResponse
         * @property {number|null} [rpcid] LoginResponse rpcid
         * @property {number|null} [code] LoginResponse code
         * @property {msg.IUserInfo|null} [userInfo] LoginResponse userInfo
         * @property {string|null} [key] LoginResponse key
         * @property {string|null} [adress] LoginResponse adress
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof msg
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {msg.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse rpcid.
         * @member {number} rpcid
         * @memberof msg.LoginResponse
         * @instance
         */
        LoginResponse.prototype.rpcid = 0;

        /**
         * LoginResponse code.
         * @member {number} code
         * @memberof msg.LoginResponse
         * @instance
         */
        LoginResponse.prototype.code = 0;

        /**
         * LoginResponse userInfo.
         * @member {msg.IUserInfo|null|undefined} userInfo
         * @memberof msg.LoginResponse
         * @instance
         */
        LoginResponse.prototype.userInfo = null;

        /**
         * LoginResponse key.
         * @member {string} key
         * @memberof msg.LoginResponse
         * @instance
         */
        LoginResponse.prototype.key = "";

        /**
         * LoginResponse adress.
         * @member {string} adress
         * @memberof msg.LoginResponse
         * @instance
         */
        LoginResponse.prototype.adress = "";

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @function create
         * @memberof msg.LoginResponse
         * @static
         * @param {msg.ILoginResponse=} [properties] Properties to set
         * @returns {msg.LoginResponse} LoginResponse instance
         */
        LoginResponse.create = function create(properties) {
            return new LoginResponse(properties);
        };

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link msg.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof msg.LoginResponse
         * @static
         * @param {msg.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rpcid != null && Object.hasOwnProperty.call(message, "rpcid"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.rpcid);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.userInfo != null && Object.hasOwnProperty.call(message, "userInfo"))
                $root.msg.UserInfo.encode(message.userInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.key);
            if (message.adress != null && Object.hasOwnProperty.call(message, "adress"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.adress);
            return writer;
        };

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link msg.LoginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.LoginResponse
         * @static
         * @param {msg.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof msg.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.LoginResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.rpcid = reader.int32();
                    break;
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.userInfo = $root.msg.UserInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.key = reader.string();
                    break;
                case 4:
                    message.adress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResponse message.
         * @function verify
         * @memberof msg.LoginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                if (!$util.isInteger(message.rpcid))
                    return "rpcid: integer expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
                var error = $root.msg.UserInfo.verify(message.userInfo);
                if (error)
                    return "userInfo." + error;
            }
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.adress != null && message.hasOwnProperty("adress"))
                if (!$util.isString(message.adress))
                    return "adress: string expected";
            return null;
        };

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.LoginResponse)
                return object;
            var message = new $root.msg.LoginResponse();
            if (object.rpcid != null)
                message.rpcid = object.rpcid | 0;
            if (object.code != null)
                message.code = object.code | 0;
            if (object.userInfo != null) {
                if (typeof object.userInfo !== "object")
                    throw TypeError(".msg.LoginResponse.userInfo: object expected");
                message.userInfo = $root.msg.UserInfo.fromObject(object.userInfo);
            }
            if (object.key != null)
                message.key = String(object.key);
            if (object.adress != null)
                message.adress = String(object.adress);
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.LoginResponse
         * @static
         * @param {msg.LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rpcid = 0;
                object.code = 0;
                object.userInfo = null;
                object.key = "";
                object.adress = "";
            }
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                object.rpcid = message.rpcid;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                object.userInfo = $root.msg.UserInfo.toObject(message.userInfo, options);
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.adress != null && message.hasOwnProperty("adress"))
                object.adress = message.adress;
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof msg.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginResponse;
    })();

    msg.GateKeyRequest = (function() {

        /**
         * Properties of a GateKeyRequest.
         * @memberof msg
         * @interface IGateKeyRequest
         * @property {number|null} [rpcid] GateKeyRequest rpcid
         * @property {msg.IUserInfo|null} [userInfo] GateKeyRequest userInfo
         */

        /**
         * Constructs a new GateKeyRequest.
         * @memberof msg
         * @classdesc Represents a GateKeyRequest.
         * @implements IGateKeyRequest
         * @constructor
         * @param {msg.IGateKeyRequest=} [properties] Properties to set
         */
        function GateKeyRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GateKeyRequest rpcid.
         * @member {number} rpcid
         * @memberof msg.GateKeyRequest
         * @instance
         */
        GateKeyRequest.prototype.rpcid = 0;

        /**
         * GateKeyRequest userInfo.
         * @member {msg.IUserInfo|null|undefined} userInfo
         * @memberof msg.GateKeyRequest
         * @instance
         */
        GateKeyRequest.prototype.userInfo = null;

        /**
         * Creates a new GateKeyRequest instance using the specified properties.
         * @function create
         * @memberof msg.GateKeyRequest
         * @static
         * @param {msg.IGateKeyRequest=} [properties] Properties to set
         * @returns {msg.GateKeyRequest} GateKeyRequest instance
         */
        GateKeyRequest.create = function create(properties) {
            return new GateKeyRequest(properties);
        };

        /**
         * Encodes the specified GateKeyRequest message. Does not implicitly {@link msg.GateKeyRequest.verify|verify} messages.
         * @function encode
         * @memberof msg.GateKeyRequest
         * @static
         * @param {msg.IGateKeyRequest} message GateKeyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GateKeyRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rpcid != null && Object.hasOwnProperty.call(message, "rpcid"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.rpcid);
            if (message.userInfo != null && Object.hasOwnProperty.call(message, "userInfo"))
                $root.msg.UserInfo.encode(message.userInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GateKeyRequest message, length delimited. Does not implicitly {@link msg.GateKeyRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GateKeyRequest
         * @static
         * @param {msg.IGateKeyRequest} message GateKeyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GateKeyRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GateKeyRequest message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GateKeyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GateKeyRequest} GateKeyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GateKeyRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GateKeyRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.rpcid = reader.int32();
                    break;
                case 2:
                    message.userInfo = $root.msg.UserInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GateKeyRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GateKeyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GateKeyRequest} GateKeyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GateKeyRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GateKeyRequest message.
         * @function verify
         * @memberof msg.GateKeyRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GateKeyRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                if (!$util.isInteger(message.rpcid))
                    return "rpcid: integer expected";
            if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
                var error = $root.msg.UserInfo.verify(message.userInfo);
                if (error)
                    return "userInfo." + error;
            }
            return null;
        };

        /**
         * Creates a GateKeyRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GateKeyRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GateKeyRequest} GateKeyRequest
         */
        GateKeyRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GateKeyRequest)
                return object;
            var message = new $root.msg.GateKeyRequest();
            if (object.rpcid != null)
                message.rpcid = object.rpcid | 0;
            if (object.userInfo != null) {
                if (typeof object.userInfo !== "object")
                    throw TypeError(".msg.GateKeyRequest.userInfo: object expected");
                message.userInfo = $root.msg.UserInfo.fromObject(object.userInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a GateKeyRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GateKeyRequest
         * @static
         * @param {msg.GateKeyRequest} message GateKeyRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GateKeyRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rpcid = 0;
                object.userInfo = null;
            }
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                object.rpcid = message.rpcid;
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                object.userInfo = $root.msg.UserInfo.toObject(message.userInfo, options);
            return object;
        };

        /**
         * Converts this GateKeyRequest to JSON.
         * @function toJSON
         * @memberof msg.GateKeyRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GateKeyRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GateKeyRequest;
    })();

    msg.GateKeyResponse = (function() {

        /**
         * Properties of a GateKeyResponse.
         * @memberof msg
         * @interface IGateKeyResponse
         * @property {number|null} [rpcid] GateKeyResponse rpcid
         * @property {string|null} [key] GateKeyResponse key
         * @property {string|null} [adress] GateKeyResponse adress
         */

        /**
         * Constructs a new GateKeyResponse.
         * @memberof msg
         * @classdesc Represents a GateKeyResponse.
         * @implements IGateKeyResponse
         * @constructor
         * @param {msg.IGateKeyResponse=} [properties] Properties to set
         */
        function GateKeyResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GateKeyResponse rpcid.
         * @member {number} rpcid
         * @memberof msg.GateKeyResponse
         * @instance
         */
        GateKeyResponse.prototype.rpcid = 0;

        /**
         * GateKeyResponse key.
         * @member {string} key
         * @memberof msg.GateKeyResponse
         * @instance
         */
        GateKeyResponse.prototype.key = "";

        /**
         * GateKeyResponse adress.
         * @member {string} adress
         * @memberof msg.GateKeyResponse
         * @instance
         */
        GateKeyResponse.prototype.adress = "";

        /**
         * Creates a new GateKeyResponse instance using the specified properties.
         * @function create
         * @memberof msg.GateKeyResponse
         * @static
         * @param {msg.IGateKeyResponse=} [properties] Properties to set
         * @returns {msg.GateKeyResponse} GateKeyResponse instance
         */
        GateKeyResponse.create = function create(properties) {
            return new GateKeyResponse(properties);
        };

        /**
         * Encodes the specified GateKeyResponse message. Does not implicitly {@link msg.GateKeyResponse.verify|verify} messages.
         * @function encode
         * @memberof msg.GateKeyResponse
         * @static
         * @param {msg.IGateKeyResponse} message GateKeyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GateKeyResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rpcid != null && Object.hasOwnProperty.call(message, "rpcid"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.rpcid);
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.key);
            if (message.adress != null && Object.hasOwnProperty.call(message, "adress"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.adress);
            return writer;
        };

        /**
         * Encodes the specified GateKeyResponse message, length delimited. Does not implicitly {@link msg.GateKeyResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GateKeyResponse
         * @static
         * @param {msg.IGateKeyResponse} message GateKeyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GateKeyResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GateKeyResponse message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GateKeyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GateKeyResponse} GateKeyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GateKeyResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GateKeyResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.rpcid = reader.int32();
                    break;
                case 3:
                    message.key = reader.string();
                    break;
                case 4:
                    message.adress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GateKeyResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GateKeyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GateKeyResponse} GateKeyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GateKeyResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GateKeyResponse message.
         * @function verify
         * @memberof msg.GateKeyResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GateKeyResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                if (!$util.isInteger(message.rpcid))
                    return "rpcid: integer expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.adress != null && message.hasOwnProperty("adress"))
                if (!$util.isString(message.adress))
                    return "adress: string expected";
            return null;
        };

        /**
         * Creates a GateKeyResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GateKeyResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GateKeyResponse} GateKeyResponse
         */
        GateKeyResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GateKeyResponse)
                return object;
            var message = new $root.msg.GateKeyResponse();
            if (object.rpcid != null)
                message.rpcid = object.rpcid | 0;
            if (object.key != null)
                message.key = String(object.key);
            if (object.adress != null)
                message.adress = String(object.adress);
            return message;
        };

        /**
         * Creates a plain object from a GateKeyResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GateKeyResponse
         * @static
         * @param {msg.GateKeyResponse} message GateKeyResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GateKeyResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rpcid = 0;
                object.key = "";
                object.adress = "";
            }
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                object.rpcid = message.rpcid;
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.adress != null && message.hasOwnProperty("adress"))
                object.adress = message.adress;
            return object;
        };

        /**
         * Converts this GateKeyResponse to JSON.
         * @function toJSON
         * @memberof msg.GateKeyResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GateKeyResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GateKeyResponse;
    })();

    msg.ConnectGateRequest = (function() {

        /**
         * Properties of a ConnectGateRequest.
         * @memberof msg
         * @interface IConnectGateRequest
         * @property {number|null} [rpcid] ConnectGateRequest rpcid
         * @property {string|null} [key] ConnectGateRequest key
         */

        /**
         * Constructs a new ConnectGateRequest.
         * @memberof msg
         * @classdesc Represents a ConnectGateRequest.
         * @implements IConnectGateRequest
         * @constructor
         * @param {msg.IConnectGateRequest=} [properties] Properties to set
         */
        function ConnectGateRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConnectGateRequest rpcid.
         * @member {number} rpcid
         * @memberof msg.ConnectGateRequest
         * @instance
         */
        ConnectGateRequest.prototype.rpcid = 0;

        /**
         * ConnectGateRequest key.
         * @member {string} key
         * @memberof msg.ConnectGateRequest
         * @instance
         */
        ConnectGateRequest.prototype.key = "";

        /**
         * Creates a new ConnectGateRequest instance using the specified properties.
         * @function create
         * @memberof msg.ConnectGateRequest
         * @static
         * @param {msg.IConnectGateRequest=} [properties] Properties to set
         * @returns {msg.ConnectGateRequest} ConnectGateRequest instance
         */
        ConnectGateRequest.create = function create(properties) {
            return new ConnectGateRequest(properties);
        };

        /**
         * Encodes the specified ConnectGateRequest message. Does not implicitly {@link msg.ConnectGateRequest.verify|verify} messages.
         * @function encode
         * @memberof msg.ConnectGateRequest
         * @static
         * @param {msg.IConnectGateRequest} message ConnectGateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectGateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rpcid != null && Object.hasOwnProperty.call(message, "rpcid"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.rpcid);
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.key);
            return writer;
        };

        /**
         * Encodes the specified ConnectGateRequest message, length delimited. Does not implicitly {@link msg.ConnectGateRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.ConnectGateRequest
         * @static
         * @param {msg.IConnectGateRequest} message ConnectGateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectGateRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConnectGateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof msg.ConnectGateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.ConnectGateRequest} ConnectGateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectGateRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.ConnectGateRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.rpcid = reader.int32();
                    break;
                case 3:
                    message.key = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConnectGateRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.ConnectGateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.ConnectGateRequest} ConnectGateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectGateRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConnectGateRequest message.
         * @function verify
         * @memberof msg.ConnectGateRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConnectGateRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                if (!$util.isInteger(message.rpcid))
                    return "rpcid: integer expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            return null;
        };

        /**
         * Creates a ConnectGateRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.ConnectGateRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.ConnectGateRequest} ConnectGateRequest
         */
        ConnectGateRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.ConnectGateRequest)
                return object;
            var message = new $root.msg.ConnectGateRequest();
            if (object.rpcid != null)
                message.rpcid = object.rpcid | 0;
            if (object.key != null)
                message.key = String(object.key);
            return message;
        };

        /**
         * Creates a plain object from a ConnectGateRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.ConnectGateRequest
         * @static
         * @param {msg.ConnectGateRequest} message ConnectGateRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConnectGateRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rpcid = 0;
                object.key = "";
            }
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                object.rpcid = message.rpcid;
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            return object;
        };

        /**
         * Converts this ConnectGateRequest to JSON.
         * @function toJSON
         * @memberof msg.ConnectGateRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConnectGateRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ConnectGateRequest;
    })();

    msg.ConnectGateResponse = (function() {

        /**
         * Properties of a ConnectGateResponse.
         * @memberof msg
         * @interface IConnectGateResponse
         * @property {number|null} [rpcid] ConnectGateResponse rpcid
         * @property {number|null} [code] ConnectGateResponse code
         * @property {string|null} [key] ConnectGateResponse key
         */

        /**
         * Constructs a new ConnectGateResponse.
         * @memberof msg
         * @classdesc Represents a ConnectGateResponse.
         * @implements IConnectGateResponse
         * @constructor
         * @param {msg.IConnectGateResponse=} [properties] Properties to set
         */
        function ConnectGateResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConnectGateResponse rpcid.
         * @member {number} rpcid
         * @memberof msg.ConnectGateResponse
         * @instance
         */
        ConnectGateResponse.prototype.rpcid = 0;

        /**
         * ConnectGateResponse code.
         * @member {number} code
         * @memberof msg.ConnectGateResponse
         * @instance
         */
        ConnectGateResponse.prototype.code = 0;

        /**
         * ConnectGateResponse key.
         * @member {string} key
         * @memberof msg.ConnectGateResponse
         * @instance
         */
        ConnectGateResponse.prototype.key = "";

        /**
         * Creates a new ConnectGateResponse instance using the specified properties.
         * @function create
         * @memberof msg.ConnectGateResponse
         * @static
         * @param {msg.IConnectGateResponse=} [properties] Properties to set
         * @returns {msg.ConnectGateResponse} ConnectGateResponse instance
         */
        ConnectGateResponse.create = function create(properties) {
            return new ConnectGateResponse(properties);
        };

        /**
         * Encodes the specified ConnectGateResponse message. Does not implicitly {@link msg.ConnectGateResponse.verify|verify} messages.
         * @function encode
         * @memberof msg.ConnectGateResponse
         * @static
         * @param {msg.IConnectGateResponse} message ConnectGateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectGateResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rpcid != null && Object.hasOwnProperty.call(message, "rpcid"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.rpcid);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.key);
            return writer;
        };

        /**
         * Encodes the specified ConnectGateResponse message, length delimited. Does not implicitly {@link msg.ConnectGateResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.ConnectGateResponse
         * @static
         * @param {msg.IConnectGateResponse} message ConnectGateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectGateResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConnectGateResponse message from the specified reader or buffer.
         * @function decode
         * @memberof msg.ConnectGateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.ConnectGateResponse} ConnectGateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectGateResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.ConnectGateResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.rpcid = reader.int32();
                    break;
                case 1:
                    message.code = reader.int32();
                    break;
                case 3:
                    message.key = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConnectGateResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.ConnectGateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.ConnectGateResponse} ConnectGateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectGateResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConnectGateResponse message.
         * @function verify
         * @memberof msg.ConnectGateResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConnectGateResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                if (!$util.isInteger(message.rpcid))
                    return "rpcid: integer expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            return null;
        };

        /**
         * Creates a ConnectGateResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.ConnectGateResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.ConnectGateResponse} ConnectGateResponse
         */
        ConnectGateResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.ConnectGateResponse)
                return object;
            var message = new $root.msg.ConnectGateResponse();
            if (object.rpcid != null)
                message.rpcid = object.rpcid | 0;
            if (object.code != null)
                message.code = object.code | 0;
            if (object.key != null)
                message.key = String(object.key);
            return message;
        };

        /**
         * Creates a plain object from a ConnectGateResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.ConnectGateResponse
         * @static
         * @param {msg.ConnectGateResponse} message ConnectGateResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConnectGateResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rpcid = 0;
                object.code = 0;
                object.key = "";
            }
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                object.rpcid = message.rpcid;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            return object;
        };

        /**
         * Converts this ConnectGateResponse to JSON.
         * @function toJSON
         * @memberof msg.ConnectGateResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConnectGateResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ConnectGateResponse;
    })();

    msg.CreateRoomRequest = (function() {

        /**
         * Properties of a CreateRoomRequest.
         * @memberof msg
         * @interface ICreateRoomRequest
         * @property {number|null} [rpcid] CreateRoomRequest rpcid
         * @property {number|null} [playerId] CreateRoomRequest playerId
         */

        /**
         * Constructs a new CreateRoomRequest.
         * @memberof msg
         * @classdesc Represents a CreateRoomRequest.
         * @implements ICreateRoomRequest
         * @constructor
         * @param {msg.ICreateRoomRequest=} [properties] Properties to set
         */
        function CreateRoomRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoomRequest rpcid.
         * @member {number} rpcid
         * @memberof msg.CreateRoomRequest
         * @instance
         */
        CreateRoomRequest.prototype.rpcid = 0;

        /**
         * CreateRoomRequest playerId.
         * @member {number} playerId
         * @memberof msg.CreateRoomRequest
         * @instance
         */
        CreateRoomRequest.prototype.playerId = 0;

        /**
         * Creates a new CreateRoomRequest instance using the specified properties.
         * @function create
         * @memberof msg.CreateRoomRequest
         * @static
         * @param {msg.ICreateRoomRequest=} [properties] Properties to set
         * @returns {msg.CreateRoomRequest} CreateRoomRequest instance
         */
        CreateRoomRequest.create = function create(properties) {
            return new CreateRoomRequest(properties);
        };

        /**
         * Encodes the specified CreateRoomRequest message. Does not implicitly {@link msg.CreateRoomRequest.verify|verify} messages.
         * @function encode
         * @memberof msg.CreateRoomRequest
         * @static
         * @param {msg.ICreateRoomRequest} message CreateRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rpcid != null && Object.hasOwnProperty.call(message, "rpcid"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.rpcid);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified CreateRoomRequest message, length delimited. Does not implicitly {@link msg.CreateRoomRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.CreateRoomRequest
         * @static
         * @param {msg.ICreateRoomRequest} message CreateRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoomRequest message from the specified reader or buffer.
         * @function decode
         * @memberof msg.CreateRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.CreateRoomRequest} CreateRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.CreateRoomRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.rpcid = reader.int32();
                    break;
                case 1:
                    message.playerId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateRoomRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.CreateRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.CreateRoomRequest} CreateRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoomRequest message.
         * @function verify
         * @memberof msg.CreateRoomRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoomRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                if (!$util.isInteger(message.rpcid))
                    return "rpcid: integer expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId))
                    return "playerId: integer expected";
            return null;
        };

        /**
         * Creates a CreateRoomRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.CreateRoomRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.CreateRoomRequest} CreateRoomRequest
         */
        CreateRoomRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.CreateRoomRequest)
                return object;
            var message = new $root.msg.CreateRoomRequest();
            if (object.rpcid != null)
                message.rpcid = object.rpcid | 0;
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            return message;
        };

        /**
         * Creates a plain object from a CreateRoomRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.CreateRoomRequest
         * @static
         * @param {msg.CreateRoomRequest} message CreateRoomRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRoomRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rpcid = 0;
                object.playerId = 0;
            }
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                object.rpcid = message.rpcid;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            return object;
        };

        /**
         * Converts this CreateRoomRequest to JSON.
         * @function toJSON
         * @memberof msg.CreateRoomRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRoomRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateRoomRequest;
    })();

    msg.CreateRoomResponse = (function() {

        /**
         * Properties of a CreateRoomResponse.
         * @memberof msg
         * @interface ICreateRoomResponse
         * @property {number|null} [rpcid] CreateRoomResponse rpcid
         * @property {number|null} [roomId] CreateRoomResponse roomId
         */

        /**
         * Constructs a new CreateRoomResponse.
         * @memberof msg
         * @classdesc Represents a CreateRoomResponse.
         * @implements ICreateRoomResponse
         * @constructor
         * @param {msg.ICreateRoomResponse=} [properties] Properties to set
         */
        function CreateRoomResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoomResponse rpcid.
         * @member {number} rpcid
         * @memberof msg.CreateRoomResponse
         * @instance
         */
        CreateRoomResponse.prototype.rpcid = 0;

        /**
         * CreateRoomResponse roomId.
         * @member {number} roomId
         * @memberof msg.CreateRoomResponse
         * @instance
         */
        CreateRoomResponse.prototype.roomId = 0;

        /**
         * Creates a new CreateRoomResponse instance using the specified properties.
         * @function create
         * @memberof msg.CreateRoomResponse
         * @static
         * @param {msg.ICreateRoomResponse=} [properties] Properties to set
         * @returns {msg.CreateRoomResponse} CreateRoomResponse instance
         */
        CreateRoomResponse.create = function create(properties) {
            return new CreateRoomResponse(properties);
        };

        /**
         * Encodes the specified CreateRoomResponse message. Does not implicitly {@link msg.CreateRoomResponse.verify|verify} messages.
         * @function encode
         * @memberof msg.CreateRoomResponse
         * @static
         * @param {msg.ICreateRoomResponse} message CreateRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rpcid != null && Object.hasOwnProperty.call(message, "rpcid"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.rpcid);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified CreateRoomResponse message, length delimited. Does not implicitly {@link msg.CreateRoomResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.CreateRoomResponse
         * @static
         * @param {msg.ICreateRoomResponse} message CreateRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoomResponse message from the specified reader or buffer.
         * @function decode
         * @memberof msg.CreateRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.CreateRoomResponse} CreateRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.CreateRoomResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.rpcid = reader.int32();
                    break;
                case 1:
                    message.roomId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateRoomResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.CreateRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.CreateRoomResponse} CreateRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoomResponse message.
         * @function verify
         * @memberof msg.CreateRoomResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoomResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                if (!$util.isInteger(message.rpcid))
                    return "rpcid: integer expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            return null;
        };

        /**
         * Creates a CreateRoomResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.CreateRoomResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.CreateRoomResponse} CreateRoomResponse
         */
        CreateRoomResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.CreateRoomResponse)
                return object;
            var message = new $root.msg.CreateRoomResponse();
            if (object.rpcid != null)
                message.rpcid = object.rpcid | 0;
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            return message;
        };

        /**
         * Creates a plain object from a CreateRoomResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.CreateRoomResponse
         * @static
         * @param {msg.CreateRoomResponse} message CreateRoomResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRoomResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rpcid = 0;
                object.roomId = 0;
            }
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                object.rpcid = message.rpcid;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            return object;
        };

        /**
         * Converts this CreateRoomResponse to JSON.
         * @function toJSON
         * @memberof msg.CreateRoomResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRoomResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateRoomResponse;
    })();

    msg.EnterRoomRequest = (function() {

        /**
         * Properties of an EnterRoomRequest.
         * @memberof msg
         * @interface IEnterRoomRequest
         * @property {number|null} [rpcid] EnterRoomRequest rpcid
         * @property {number|null} [playerId] EnterRoomRequest playerId
         * @property {number|null} [roomId] EnterRoomRequest roomId
         */

        /**
         * Constructs a new EnterRoomRequest.
         * @memberof msg
         * @classdesc Represents an EnterRoomRequest.
         * @implements IEnterRoomRequest
         * @constructor
         * @param {msg.IEnterRoomRequest=} [properties] Properties to set
         */
        function EnterRoomRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomRequest rpcid.
         * @member {number} rpcid
         * @memberof msg.EnterRoomRequest
         * @instance
         */
        EnterRoomRequest.prototype.rpcid = 0;

        /**
         * EnterRoomRequest playerId.
         * @member {number} playerId
         * @memberof msg.EnterRoomRequest
         * @instance
         */
        EnterRoomRequest.prototype.playerId = 0;

        /**
         * EnterRoomRequest roomId.
         * @member {number} roomId
         * @memberof msg.EnterRoomRequest
         * @instance
         */
        EnterRoomRequest.prototype.roomId = 0;

        /**
         * Creates a new EnterRoomRequest instance using the specified properties.
         * @function create
         * @memberof msg.EnterRoomRequest
         * @static
         * @param {msg.IEnterRoomRequest=} [properties] Properties to set
         * @returns {msg.EnterRoomRequest} EnterRoomRequest instance
         */
        EnterRoomRequest.create = function create(properties) {
            return new EnterRoomRequest(properties);
        };

        /**
         * Encodes the specified EnterRoomRequest message. Does not implicitly {@link msg.EnterRoomRequest.verify|verify} messages.
         * @function encode
         * @memberof msg.EnterRoomRequest
         * @static
         * @param {msg.IEnterRoomRequest} message EnterRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rpcid != null && Object.hasOwnProperty.call(message, "rpcid"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.rpcid);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified EnterRoomRequest message, length delimited. Does not implicitly {@link msg.EnterRoomRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.EnterRoomRequest
         * @static
         * @param {msg.IEnterRoomRequest} message EnterRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomRequest message from the specified reader or buffer.
         * @function decode
         * @memberof msg.EnterRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.EnterRoomRequest} EnterRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.EnterRoomRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.rpcid = reader.int32();
                    break;
                case 1:
                    message.playerId = reader.int32();
                    break;
                case 2:
                    message.roomId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterRoomRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.EnterRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.EnterRoomRequest} EnterRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomRequest message.
         * @function verify
         * @memberof msg.EnterRoomRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                if (!$util.isInteger(message.rpcid))
                    return "rpcid: integer expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId))
                    return "playerId: integer expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            return null;
        };

        /**
         * Creates an EnterRoomRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.EnterRoomRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.EnterRoomRequest} EnterRoomRequest
         */
        EnterRoomRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.EnterRoomRequest)
                return object;
            var message = new $root.msg.EnterRoomRequest();
            if (object.rpcid != null)
                message.rpcid = object.rpcid | 0;
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.EnterRoomRequest
         * @static
         * @param {msg.EnterRoomRequest} message EnterRoomRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rpcid = 0;
                object.playerId = 0;
                object.roomId = 0;
            }
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                object.rpcid = message.rpcid;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            return object;
        };

        /**
         * Converts this EnterRoomRequest to JSON.
         * @function toJSON
         * @memberof msg.EnterRoomRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterRoomRequest;
    })();

    msg.EnterRoomResponse = (function() {

        /**
         * Properties of an EnterRoomResponse.
         * @memberof msg
         * @interface IEnterRoomResponse
         * @property {number|null} [rpcid] EnterRoomResponse rpcid
         * @property {number|null} [playerId] EnterRoomResponse playerId
         * @property {number|null} [roomId] EnterRoomResponse roomId
         */

        /**
         * Constructs a new EnterRoomResponse.
         * @memberof msg
         * @classdesc Represents an EnterRoomResponse.
         * @implements IEnterRoomResponse
         * @constructor
         * @param {msg.IEnterRoomResponse=} [properties] Properties to set
         */
        function EnterRoomResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomResponse rpcid.
         * @member {number} rpcid
         * @memberof msg.EnterRoomResponse
         * @instance
         */
        EnterRoomResponse.prototype.rpcid = 0;

        /**
         * EnterRoomResponse playerId.
         * @member {number} playerId
         * @memberof msg.EnterRoomResponse
         * @instance
         */
        EnterRoomResponse.prototype.playerId = 0;

        /**
         * EnterRoomResponse roomId.
         * @member {number} roomId
         * @memberof msg.EnterRoomResponse
         * @instance
         */
        EnterRoomResponse.prototype.roomId = 0;

        /**
         * Creates a new EnterRoomResponse instance using the specified properties.
         * @function create
         * @memberof msg.EnterRoomResponse
         * @static
         * @param {msg.IEnterRoomResponse=} [properties] Properties to set
         * @returns {msg.EnterRoomResponse} EnterRoomResponse instance
         */
        EnterRoomResponse.create = function create(properties) {
            return new EnterRoomResponse(properties);
        };

        /**
         * Encodes the specified EnterRoomResponse message. Does not implicitly {@link msg.EnterRoomResponse.verify|verify} messages.
         * @function encode
         * @memberof msg.EnterRoomResponse
         * @static
         * @param {msg.IEnterRoomResponse} message EnterRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rpcid != null && Object.hasOwnProperty.call(message, "rpcid"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.rpcid);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified EnterRoomResponse message, length delimited. Does not implicitly {@link msg.EnterRoomResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.EnterRoomResponse
         * @static
         * @param {msg.IEnterRoomResponse} message EnterRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomResponse message from the specified reader or buffer.
         * @function decode
         * @memberof msg.EnterRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.EnterRoomResponse} EnterRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.EnterRoomResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.rpcid = reader.int32();
                    break;
                case 1:
                    message.playerId = reader.int32();
                    break;
                case 2:
                    message.roomId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterRoomResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.EnterRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.EnterRoomResponse} EnterRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomResponse message.
         * @function verify
         * @memberof msg.EnterRoomResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                if (!$util.isInteger(message.rpcid))
                    return "rpcid: integer expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId))
                    return "playerId: integer expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            return null;
        };

        /**
         * Creates an EnterRoomResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.EnterRoomResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.EnterRoomResponse} EnterRoomResponse
         */
        EnterRoomResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.EnterRoomResponse)
                return object;
            var message = new $root.msg.EnterRoomResponse();
            if (object.rpcid != null)
                message.rpcid = object.rpcid | 0;
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.EnterRoomResponse
         * @static
         * @param {msg.EnterRoomResponse} message EnterRoomResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rpcid = 0;
                object.playerId = 0;
                object.roomId = 0;
            }
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                object.rpcid = message.rpcid;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            return object;
        };

        /**
         * Converts this EnterRoomResponse to JSON.
         * @function toJSON
         * @memberof msg.EnterRoomResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterRoomResponse;
    })();

    msg.QuitRoomRequest = (function() {

        /**
         * Properties of a QuitRoomRequest.
         * @memberof msg
         * @interface IQuitRoomRequest
         * @property {number|null} [rpcid] QuitRoomRequest rpcid
         * @property {number|null} [playerId] QuitRoomRequest playerId
         * @property {number|null} [roomId] QuitRoomRequest roomId
         */

        /**
         * Constructs a new QuitRoomRequest.
         * @memberof msg
         * @classdesc Represents a QuitRoomRequest.
         * @implements IQuitRoomRequest
         * @constructor
         * @param {msg.IQuitRoomRequest=} [properties] Properties to set
         */
        function QuitRoomRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuitRoomRequest rpcid.
         * @member {number} rpcid
         * @memberof msg.QuitRoomRequest
         * @instance
         */
        QuitRoomRequest.prototype.rpcid = 0;

        /**
         * QuitRoomRequest playerId.
         * @member {number} playerId
         * @memberof msg.QuitRoomRequest
         * @instance
         */
        QuitRoomRequest.prototype.playerId = 0;

        /**
         * QuitRoomRequest roomId.
         * @member {number} roomId
         * @memberof msg.QuitRoomRequest
         * @instance
         */
        QuitRoomRequest.prototype.roomId = 0;

        /**
         * Creates a new QuitRoomRequest instance using the specified properties.
         * @function create
         * @memberof msg.QuitRoomRequest
         * @static
         * @param {msg.IQuitRoomRequest=} [properties] Properties to set
         * @returns {msg.QuitRoomRequest} QuitRoomRequest instance
         */
        QuitRoomRequest.create = function create(properties) {
            return new QuitRoomRequest(properties);
        };

        /**
         * Encodes the specified QuitRoomRequest message. Does not implicitly {@link msg.QuitRoomRequest.verify|verify} messages.
         * @function encode
         * @memberof msg.QuitRoomRequest
         * @static
         * @param {msg.IQuitRoomRequest} message QuitRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitRoomRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rpcid != null && Object.hasOwnProperty.call(message, "rpcid"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.rpcid);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified QuitRoomRequest message, length delimited. Does not implicitly {@link msg.QuitRoomRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.QuitRoomRequest
         * @static
         * @param {msg.IQuitRoomRequest} message QuitRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuitRoomRequest message from the specified reader or buffer.
         * @function decode
         * @memberof msg.QuitRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.QuitRoomRequest} QuitRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitRoomRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.QuitRoomRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.rpcid = reader.int32();
                    break;
                case 1:
                    message.playerId = reader.int32();
                    break;
                case 2:
                    message.roomId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuitRoomRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.QuitRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.QuitRoomRequest} QuitRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitRoomRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuitRoomRequest message.
         * @function verify
         * @memberof msg.QuitRoomRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuitRoomRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                if (!$util.isInteger(message.rpcid))
                    return "rpcid: integer expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId))
                    return "playerId: integer expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            return null;
        };

        /**
         * Creates a QuitRoomRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.QuitRoomRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.QuitRoomRequest} QuitRoomRequest
         */
        QuitRoomRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.QuitRoomRequest)
                return object;
            var message = new $root.msg.QuitRoomRequest();
            if (object.rpcid != null)
                message.rpcid = object.rpcid | 0;
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            return message;
        };

        /**
         * Creates a plain object from a QuitRoomRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.QuitRoomRequest
         * @static
         * @param {msg.QuitRoomRequest} message QuitRoomRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuitRoomRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rpcid = 0;
                object.playerId = 0;
                object.roomId = 0;
            }
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                object.rpcid = message.rpcid;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            return object;
        };

        /**
         * Converts this QuitRoomRequest to JSON.
         * @function toJSON
         * @memberof msg.QuitRoomRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuitRoomRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QuitRoomRequest;
    })();

    msg.QuitRoomResponse = (function() {

        /**
         * Properties of a QuitRoomResponse.
         * @memberof msg
         * @interface IQuitRoomResponse
         * @property {number|null} [rpcid] QuitRoomResponse rpcid
         * @property {number|null} [playerId] QuitRoomResponse playerId
         */

        /**
         * Constructs a new QuitRoomResponse.
         * @memberof msg
         * @classdesc Represents a QuitRoomResponse.
         * @implements IQuitRoomResponse
         * @constructor
         * @param {msg.IQuitRoomResponse=} [properties] Properties to set
         */
        function QuitRoomResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuitRoomResponse rpcid.
         * @member {number} rpcid
         * @memberof msg.QuitRoomResponse
         * @instance
         */
        QuitRoomResponse.prototype.rpcid = 0;

        /**
         * QuitRoomResponse playerId.
         * @member {number} playerId
         * @memberof msg.QuitRoomResponse
         * @instance
         */
        QuitRoomResponse.prototype.playerId = 0;

        /**
         * Creates a new QuitRoomResponse instance using the specified properties.
         * @function create
         * @memberof msg.QuitRoomResponse
         * @static
         * @param {msg.IQuitRoomResponse=} [properties] Properties to set
         * @returns {msg.QuitRoomResponse} QuitRoomResponse instance
         */
        QuitRoomResponse.create = function create(properties) {
            return new QuitRoomResponse(properties);
        };

        /**
         * Encodes the specified QuitRoomResponse message. Does not implicitly {@link msg.QuitRoomResponse.verify|verify} messages.
         * @function encode
         * @memberof msg.QuitRoomResponse
         * @static
         * @param {msg.IQuitRoomResponse} message QuitRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitRoomResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rpcid != null && Object.hasOwnProperty.call(message, "rpcid"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.rpcid);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified QuitRoomResponse message, length delimited. Does not implicitly {@link msg.QuitRoomResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.QuitRoomResponse
         * @static
         * @param {msg.IQuitRoomResponse} message QuitRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuitRoomResponse message from the specified reader or buffer.
         * @function decode
         * @memberof msg.QuitRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.QuitRoomResponse} QuitRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitRoomResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.QuitRoomResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.rpcid = reader.int32();
                    break;
                case 1:
                    message.playerId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuitRoomResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.QuitRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.QuitRoomResponse} QuitRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitRoomResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuitRoomResponse message.
         * @function verify
         * @memberof msg.QuitRoomResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuitRoomResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                if (!$util.isInteger(message.rpcid))
                    return "rpcid: integer expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId))
                    return "playerId: integer expected";
            return null;
        };

        /**
         * Creates a QuitRoomResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.QuitRoomResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.QuitRoomResponse} QuitRoomResponse
         */
        QuitRoomResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.QuitRoomResponse)
                return object;
            var message = new $root.msg.QuitRoomResponse();
            if (object.rpcid != null)
                message.rpcid = object.rpcid | 0;
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            return message;
        };

        /**
         * Creates a plain object from a QuitRoomResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.QuitRoomResponse
         * @static
         * @param {msg.QuitRoomResponse} message QuitRoomResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuitRoomResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rpcid = 0;
                object.playerId = 0;
            }
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                object.rpcid = message.rpcid;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            return object;
        };

        /**
         * Converts this QuitRoomResponse to JSON.
         * @function toJSON
         * @memberof msg.QuitRoomResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuitRoomResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QuitRoomResponse;
    })();

    msg.MatchRequest = (function() {

        /**
         * Properties of a MatchRequest.
         * @memberof msg
         * @interface IMatchRequest
         * @property {number|null} [rpcid] MatchRequest rpcid
         * @property {number|null} [roomId] MatchRequest roomId
         */

        /**
         * Constructs a new MatchRequest.
         * @memberof msg
         * @classdesc Represents a MatchRequest.
         * @implements IMatchRequest
         * @constructor
         * @param {msg.IMatchRequest=} [properties] Properties to set
         */
        function MatchRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MatchRequest rpcid.
         * @member {number} rpcid
         * @memberof msg.MatchRequest
         * @instance
         */
        MatchRequest.prototype.rpcid = 0;

        /**
         * MatchRequest roomId.
         * @member {number} roomId
         * @memberof msg.MatchRequest
         * @instance
         */
        MatchRequest.prototype.roomId = 0;

        /**
         * Creates a new MatchRequest instance using the specified properties.
         * @function create
         * @memberof msg.MatchRequest
         * @static
         * @param {msg.IMatchRequest=} [properties] Properties to set
         * @returns {msg.MatchRequest} MatchRequest instance
         */
        MatchRequest.create = function create(properties) {
            return new MatchRequest(properties);
        };

        /**
         * Encodes the specified MatchRequest message. Does not implicitly {@link msg.MatchRequest.verify|verify} messages.
         * @function encode
         * @memberof msg.MatchRequest
         * @static
         * @param {msg.IMatchRequest} message MatchRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rpcid != null && Object.hasOwnProperty.call(message, "rpcid"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.rpcid);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified MatchRequest message, length delimited. Does not implicitly {@link msg.MatchRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MatchRequest
         * @static
         * @param {msg.IMatchRequest} message MatchRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MatchRequest message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MatchRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MatchRequest} MatchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MatchRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.rpcid = reader.int32();
                    break;
                case 1:
                    message.roomId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MatchRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MatchRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MatchRequest} MatchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MatchRequest message.
         * @function verify
         * @memberof msg.MatchRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MatchRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                if (!$util.isInteger(message.rpcid))
                    return "rpcid: integer expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            return null;
        };

        /**
         * Creates a MatchRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MatchRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MatchRequest} MatchRequest
         */
        MatchRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MatchRequest)
                return object;
            var message = new $root.msg.MatchRequest();
            if (object.rpcid != null)
                message.rpcid = object.rpcid | 0;
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            return message;
        };

        /**
         * Creates a plain object from a MatchRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MatchRequest
         * @static
         * @param {msg.MatchRequest} message MatchRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MatchRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rpcid = 0;
                object.roomId = 0;
            }
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                object.rpcid = message.rpcid;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            return object;
        };

        /**
         * Converts this MatchRequest to JSON.
         * @function toJSON
         * @memberof msg.MatchRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MatchRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MatchRequest;
    })();

    msg.MatchResponse = (function() {

        /**
         * Properties of a MatchResponse.
         * @memberof msg
         * @interface IMatchResponse
         * @property {number|null} [rpcid] MatchResponse rpcid
         * @property {number|null} [code] MatchResponse code
         */

        /**
         * Constructs a new MatchResponse.
         * @memberof msg
         * @classdesc Represents a MatchResponse.
         * @implements IMatchResponse
         * @constructor
         * @param {msg.IMatchResponse=} [properties] Properties to set
         */
        function MatchResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MatchResponse rpcid.
         * @member {number} rpcid
         * @memberof msg.MatchResponse
         * @instance
         */
        MatchResponse.prototype.rpcid = 0;

        /**
         * MatchResponse code.
         * @member {number} code
         * @memberof msg.MatchResponse
         * @instance
         */
        MatchResponse.prototype.code = 0;

        /**
         * Creates a new MatchResponse instance using the specified properties.
         * @function create
         * @memberof msg.MatchResponse
         * @static
         * @param {msg.IMatchResponse=} [properties] Properties to set
         * @returns {msg.MatchResponse} MatchResponse instance
         */
        MatchResponse.create = function create(properties) {
            return new MatchResponse(properties);
        };

        /**
         * Encodes the specified MatchResponse message. Does not implicitly {@link msg.MatchResponse.verify|verify} messages.
         * @function encode
         * @memberof msg.MatchResponse
         * @static
         * @param {msg.IMatchResponse} message MatchResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rpcid != null && Object.hasOwnProperty.call(message, "rpcid"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.rpcid);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            return writer;
        };

        /**
         * Encodes the specified MatchResponse message, length delimited. Does not implicitly {@link msg.MatchResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MatchResponse
         * @static
         * @param {msg.IMatchResponse} message MatchResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MatchResponse message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MatchResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MatchResponse} MatchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MatchResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.rpcid = reader.int32();
                    break;
                case 1:
                    message.code = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MatchResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MatchResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MatchResponse} MatchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MatchResponse message.
         * @function verify
         * @memberof msg.MatchResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MatchResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                if (!$util.isInteger(message.rpcid))
                    return "rpcid: integer expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            return null;
        };

        /**
         * Creates a MatchResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MatchResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MatchResponse} MatchResponse
         */
        MatchResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MatchResponse)
                return object;
            var message = new $root.msg.MatchResponse();
            if (object.rpcid != null)
                message.rpcid = object.rpcid | 0;
            if (object.code != null)
                message.code = object.code | 0;
            return message;
        };

        /**
         * Creates a plain object from a MatchResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MatchResponse
         * @static
         * @param {msg.MatchResponse} message MatchResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MatchResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rpcid = 0;
                object.code = 0;
            }
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                object.rpcid = message.rpcid;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this MatchResponse to JSON.
         * @function toJSON
         * @memberof msg.MatchResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MatchResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MatchResponse;
    })();

    msg.CancelMatchRequest = (function() {

        /**
         * Properties of a CancelMatchRequest.
         * @memberof msg
         * @interface ICancelMatchRequest
         * @property {number|null} [rpcid] CancelMatchRequest rpcid
         * @property {number|null} [roomId] CancelMatchRequest roomId
         */

        /**
         * Constructs a new CancelMatchRequest.
         * @memberof msg
         * @classdesc Represents a CancelMatchRequest.
         * @implements ICancelMatchRequest
         * @constructor
         * @param {msg.ICancelMatchRequest=} [properties] Properties to set
         */
        function CancelMatchRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CancelMatchRequest rpcid.
         * @member {number} rpcid
         * @memberof msg.CancelMatchRequest
         * @instance
         */
        CancelMatchRequest.prototype.rpcid = 0;

        /**
         * CancelMatchRequest roomId.
         * @member {number} roomId
         * @memberof msg.CancelMatchRequest
         * @instance
         */
        CancelMatchRequest.prototype.roomId = 0;

        /**
         * Creates a new CancelMatchRequest instance using the specified properties.
         * @function create
         * @memberof msg.CancelMatchRequest
         * @static
         * @param {msg.ICancelMatchRequest=} [properties] Properties to set
         * @returns {msg.CancelMatchRequest} CancelMatchRequest instance
         */
        CancelMatchRequest.create = function create(properties) {
            return new CancelMatchRequest(properties);
        };

        /**
         * Encodes the specified CancelMatchRequest message. Does not implicitly {@link msg.CancelMatchRequest.verify|verify} messages.
         * @function encode
         * @memberof msg.CancelMatchRequest
         * @static
         * @param {msg.ICancelMatchRequest} message CancelMatchRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelMatchRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rpcid != null && Object.hasOwnProperty.call(message, "rpcid"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.rpcid);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified CancelMatchRequest message, length delimited. Does not implicitly {@link msg.CancelMatchRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.CancelMatchRequest
         * @static
         * @param {msg.ICancelMatchRequest} message CancelMatchRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelMatchRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CancelMatchRequest message from the specified reader or buffer.
         * @function decode
         * @memberof msg.CancelMatchRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.CancelMatchRequest} CancelMatchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelMatchRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.CancelMatchRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.rpcid = reader.int32();
                    break;
                case 1:
                    message.roomId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CancelMatchRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.CancelMatchRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.CancelMatchRequest} CancelMatchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelMatchRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CancelMatchRequest message.
         * @function verify
         * @memberof msg.CancelMatchRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CancelMatchRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                if (!$util.isInteger(message.rpcid))
                    return "rpcid: integer expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            return null;
        };

        /**
         * Creates a CancelMatchRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.CancelMatchRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.CancelMatchRequest} CancelMatchRequest
         */
        CancelMatchRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.CancelMatchRequest)
                return object;
            var message = new $root.msg.CancelMatchRequest();
            if (object.rpcid != null)
                message.rpcid = object.rpcid | 0;
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            return message;
        };

        /**
         * Creates a plain object from a CancelMatchRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.CancelMatchRequest
         * @static
         * @param {msg.CancelMatchRequest} message CancelMatchRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CancelMatchRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rpcid = 0;
                object.roomId = 0;
            }
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                object.rpcid = message.rpcid;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            return object;
        };

        /**
         * Converts this CancelMatchRequest to JSON.
         * @function toJSON
         * @memberof msg.CancelMatchRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CancelMatchRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CancelMatchRequest;
    })();

    msg.CancelMatchResponse = (function() {

        /**
         * Properties of a CancelMatchResponse.
         * @memberof msg
         * @interface ICancelMatchResponse
         * @property {number|null} [rpcid] CancelMatchResponse rpcid
         * @property {number|null} [code] CancelMatchResponse code
         */

        /**
         * Constructs a new CancelMatchResponse.
         * @memberof msg
         * @classdesc Represents a CancelMatchResponse.
         * @implements ICancelMatchResponse
         * @constructor
         * @param {msg.ICancelMatchResponse=} [properties] Properties to set
         */
        function CancelMatchResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CancelMatchResponse rpcid.
         * @member {number} rpcid
         * @memberof msg.CancelMatchResponse
         * @instance
         */
        CancelMatchResponse.prototype.rpcid = 0;

        /**
         * CancelMatchResponse code.
         * @member {number} code
         * @memberof msg.CancelMatchResponse
         * @instance
         */
        CancelMatchResponse.prototype.code = 0;

        /**
         * Creates a new CancelMatchResponse instance using the specified properties.
         * @function create
         * @memberof msg.CancelMatchResponse
         * @static
         * @param {msg.ICancelMatchResponse=} [properties] Properties to set
         * @returns {msg.CancelMatchResponse} CancelMatchResponse instance
         */
        CancelMatchResponse.create = function create(properties) {
            return new CancelMatchResponse(properties);
        };

        /**
         * Encodes the specified CancelMatchResponse message. Does not implicitly {@link msg.CancelMatchResponse.verify|verify} messages.
         * @function encode
         * @memberof msg.CancelMatchResponse
         * @static
         * @param {msg.ICancelMatchResponse} message CancelMatchResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelMatchResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rpcid != null && Object.hasOwnProperty.call(message, "rpcid"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.rpcid);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            return writer;
        };

        /**
         * Encodes the specified CancelMatchResponse message, length delimited. Does not implicitly {@link msg.CancelMatchResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.CancelMatchResponse
         * @static
         * @param {msg.ICancelMatchResponse} message CancelMatchResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelMatchResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CancelMatchResponse message from the specified reader or buffer.
         * @function decode
         * @memberof msg.CancelMatchResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.CancelMatchResponse} CancelMatchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelMatchResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.CancelMatchResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.rpcid = reader.int32();
                    break;
                case 1:
                    message.code = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CancelMatchResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.CancelMatchResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.CancelMatchResponse} CancelMatchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelMatchResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CancelMatchResponse message.
         * @function verify
         * @memberof msg.CancelMatchResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CancelMatchResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                if (!$util.isInteger(message.rpcid))
                    return "rpcid: integer expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            return null;
        };

        /**
         * Creates a CancelMatchResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.CancelMatchResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.CancelMatchResponse} CancelMatchResponse
         */
        CancelMatchResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.CancelMatchResponse)
                return object;
            var message = new $root.msg.CancelMatchResponse();
            if (object.rpcid != null)
                message.rpcid = object.rpcid | 0;
            if (object.code != null)
                message.code = object.code | 0;
            return message;
        };

        /**
         * Creates a plain object from a CancelMatchResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.CancelMatchResponse
         * @static
         * @param {msg.CancelMatchResponse} message CancelMatchResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CancelMatchResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rpcid = 0;
                object.code = 0;
            }
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                object.rpcid = message.rpcid;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this CancelMatchResponse to JSON.
         * @function toJSON
         * @memberof msg.CancelMatchResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CancelMatchResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CancelMatchResponse;
    })();

    msg.MatchSuccess = (function() {

        /**
         * Properties of a MatchSuccess.
         * @memberof msg
         * @interface IMatchSuccess
         * @property {number|null} [rpcid] MatchSuccess rpcid
         * @property {number|null} [code] MatchSuccess code
         */

        /**
         * Constructs a new MatchSuccess.
         * @memberof msg
         * @classdesc Represents a MatchSuccess.
         * @implements IMatchSuccess
         * @constructor
         * @param {msg.IMatchSuccess=} [properties] Properties to set
         */
        function MatchSuccess(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MatchSuccess rpcid.
         * @member {number} rpcid
         * @memberof msg.MatchSuccess
         * @instance
         */
        MatchSuccess.prototype.rpcid = 0;

        /**
         * MatchSuccess code.
         * @member {number} code
         * @memberof msg.MatchSuccess
         * @instance
         */
        MatchSuccess.prototype.code = 0;

        /**
         * Creates a new MatchSuccess instance using the specified properties.
         * @function create
         * @memberof msg.MatchSuccess
         * @static
         * @param {msg.IMatchSuccess=} [properties] Properties to set
         * @returns {msg.MatchSuccess} MatchSuccess instance
         */
        MatchSuccess.create = function create(properties) {
            return new MatchSuccess(properties);
        };

        /**
         * Encodes the specified MatchSuccess message. Does not implicitly {@link msg.MatchSuccess.verify|verify} messages.
         * @function encode
         * @memberof msg.MatchSuccess
         * @static
         * @param {msg.IMatchSuccess} message MatchSuccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchSuccess.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rpcid != null && Object.hasOwnProperty.call(message, "rpcid"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.rpcid);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            return writer;
        };

        /**
         * Encodes the specified MatchSuccess message, length delimited. Does not implicitly {@link msg.MatchSuccess.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MatchSuccess
         * @static
         * @param {msg.IMatchSuccess} message MatchSuccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchSuccess.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MatchSuccess message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MatchSuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MatchSuccess} MatchSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchSuccess.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MatchSuccess();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.rpcid = reader.int32();
                    break;
                case 1:
                    message.code = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MatchSuccess message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MatchSuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MatchSuccess} MatchSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchSuccess.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MatchSuccess message.
         * @function verify
         * @memberof msg.MatchSuccess
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MatchSuccess.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                if (!$util.isInteger(message.rpcid))
                    return "rpcid: integer expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            return null;
        };

        /**
         * Creates a MatchSuccess message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MatchSuccess
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MatchSuccess} MatchSuccess
         */
        MatchSuccess.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MatchSuccess)
                return object;
            var message = new $root.msg.MatchSuccess();
            if (object.rpcid != null)
                message.rpcid = object.rpcid | 0;
            if (object.code != null)
                message.code = object.code | 0;
            return message;
        };

        /**
         * Creates a plain object from a MatchSuccess message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MatchSuccess
         * @static
         * @param {msg.MatchSuccess} message MatchSuccess
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MatchSuccess.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rpcid = 0;
                object.code = 0;
            }
            if (message.rpcid != null && message.hasOwnProperty("rpcid"))
                object.rpcid = message.rpcid;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this MatchSuccess to JSON.
         * @function toJSON
         * @memberof msg.MatchSuccess
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MatchSuccess.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MatchSuccess;
    })();

    return msg;
})();

module.exports = $root;
