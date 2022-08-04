// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.
import $protobuf from "protobufjs"
/** Namespace msg. */
export namespace msg {

    /** Properties of a KV. */
    interface IKV {

        /** KV k */
        k?: (number|null);

        /** KV v */
        v?: (number|null);
    }

    /** Represents a KV. */
    class KV implements IKV {

        /**
         * Constructs a new KV.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IKV);

        /** KV k. */
        public k: number;

        /** KV v. */
        public v: number;

        /**
         * Creates a new KV instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KV instance
         */
        public static create(properties?: msg.IKV): msg.KV;

        /**
         * Encodes the specified KV message. Does not implicitly {@link msg.KV.verify|verify} messages.
         * @param message KV message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IKV, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KV message, length delimited. Does not implicitly {@link msg.KV.verify|verify} messages.
         * @param message KV message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IKV, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KV message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KV
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.KV;

        /**
         * Decodes a KV message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KV
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.KV;

        /**
         * Verifies a KV message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KV message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KV
         */
        public static fromObject(object: { [k: string]: any }): msg.KV;

        /**
         * Creates a plain object from a KV message. Also converts values to other types if specified.
         * @param message KV
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.KV, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KV to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest rpcid */
        rpcid?: (number|null);

        /** LoginRequest email */
        email?: (string|null);

        /** LoginRequest passWord */
        passWord?: (string|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ILoginRequest);

        /** LoginRequest rpcid. */
        public rpcid: number;

        /** LoginRequest email. */
        public email: string;

        /** LoginRequest passWord. */
        public passWord: string;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: msg.ILoginRequest): msg.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link msg.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link msg.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): msg.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo id */
        id?: (number|null);

        /** UserInfo eMail */
        eMail?: (string|null);

        /** UserInfo passWord */
        passWord?: (string|null);

        /** UserInfo name */
        name?: (string|null);

        /** UserInfo lv */
        lv?: (number|null);

        /** UserInfo goods */
        goods?: (msg.IKV[]|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IUserInfo);

        /** UserInfo id. */
        public id: number;

        /** UserInfo eMail. */
        public eMail: string;

        /** UserInfo passWord. */
        public passWord: string;

        /** UserInfo name. */
        public name: string;

        /** UserInfo lv. */
        public lv: number;

        /** UserInfo goods. */
        public goods: msg.IKV[];

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfo instance
         */
        public static create(properties?: msg.IUserInfo): msg.UserInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link msg.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link msg.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.UserInfo;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.UserInfo;

        /**
         * Verifies a UserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfo
         */
        public static fromObject(object: { [k: string]: any }): msg.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse rpcid */
        rpcid?: (number|null);

        /** LoginResponse code */
        code?: (number|null);

        /** LoginResponse userInfo */
        userInfo?: (msg.IUserInfo|null);

        /** LoginResponse key */
        key?: (string|null);

        /** LoginResponse adress */
        adress?: (string|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ILoginResponse);

        /** LoginResponse rpcid. */
        public rpcid: number;

        /** LoginResponse code. */
        public code: number;

        /** LoginResponse userInfo. */
        public userInfo?: (msg.IUserInfo|null);

        /** LoginResponse key. */
        public key: string;

        /** LoginResponse adress. */
        public adress: string;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponse instance
         */
        public static create(properties?: msg.ILoginResponse): msg.LoginResponse;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link msg.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link msg.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.LoginResponse;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.LoginResponse;

        /**
         * Verifies a LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): msg.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GateKeyRequest. */
    interface IGateKeyRequest {

        /** GateKeyRequest rpcid */
        rpcid?: (number|null);

        /** GateKeyRequest userInfo */
        userInfo?: (msg.IUserInfo|null);
    }

    /** Represents a GateKeyRequest. */
    class GateKeyRequest implements IGateKeyRequest {

        /**
         * Constructs a new GateKeyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGateKeyRequest);

        /** GateKeyRequest rpcid. */
        public rpcid: number;

        /** GateKeyRequest userInfo. */
        public userInfo?: (msg.IUserInfo|null);

        /**
         * Creates a new GateKeyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GateKeyRequest instance
         */
        public static create(properties?: msg.IGateKeyRequest): msg.GateKeyRequest;

        /**
         * Encodes the specified GateKeyRequest message. Does not implicitly {@link msg.GateKeyRequest.verify|verify} messages.
         * @param message GateKeyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGateKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GateKeyRequest message, length delimited. Does not implicitly {@link msg.GateKeyRequest.verify|verify} messages.
         * @param message GateKeyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGateKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GateKeyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GateKeyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GateKeyRequest;

        /**
         * Decodes a GateKeyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GateKeyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GateKeyRequest;

        /**
         * Verifies a GateKeyRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GateKeyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GateKeyRequest
         */
        public static fromObject(object: { [k: string]: any }): msg.GateKeyRequest;

        /**
         * Creates a plain object from a GateKeyRequest message. Also converts values to other types if specified.
         * @param message GateKeyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GateKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GateKeyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GateKeyResponse. */
    interface IGateKeyResponse {

        /** GateKeyResponse rpcid */
        rpcid?: (number|null);

        /** GateKeyResponse key */
        key?: (string|null);

        /** GateKeyResponse adress */
        adress?: (string|null);
    }

    /** Represents a GateKeyResponse. */
    class GateKeyResponse implements IGateKeyResponse {

        /**
         * Constructs a new GateKeyResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGateKeyResponse);

        /** GateKeyResponse rpcid. */
        public rpcid: number;

        /** GateKeyResponse key. */
        public key: string;

        /** GateKeyResponse adress. */
        public adress: string;

        /**
         * Creates a new GateKeyResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GateKeyResponse instance
         */
        public static create(properties?: msg.IGateKeyResponse): msg.GateKeyResponse;

        /**
         * Encodes the specified GateKeyResponse message. Does not implicitly {@link msg.GateKeyResponse.verify|verify} messages.
         * @param message GateKeyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGateKeyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GateKeyResponse message, length delimited. Does not implicitly {@link msg.GateKeyResponse.verify|verify} messages.
         * @param message GateKeyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGateKeyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GateKeyResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GateKeyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GateKeyResponse;

        /**
         * Decodes a GateKeyResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GateKeyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GateKeyResponse;

        /**
         * Verifies a GateKeyResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GateKeyResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GateKeyResponse
         */
        public static fromObject(object: { [k: string]: any }): msg.GateKeyResponse;

        /**
         * Creates a plain object from a GateKeyResponse message. Also converts values to other types if specified.
         * @param message GateKeyResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GateKeyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GateKeyResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConnectGateRequest. */
    interface IConnectGateRequest {

        /** ConnectGateRequest rpcid */
        rpcid?: (number|null);

        /** ConnectGateRequest key */
        key?: (string|null);
    }

    /** Represents a ConnectGateRequest. */
    class ConnectGateRequest implements IConnectGateRequest {

        /**
         * Constructs a new ConnectGateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IConnectGateRequest);

        /** ConnectGateRequest rpcid. */
        public rpcid: number;

        /** ConnectGateRequest key. */
        public key: string;

        /**
         * Creates a new ConnectGateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectGateRequest instance
         */
        public static create(properties?: msg.IConnectGateRequest): msg.ConnectGateRequest;

        /**
         * Encodes the specified ConnectGateRequest message. Does not implicitly {@link msg.ConnectGateRequest.verify|verify} messages.
         * @param message ConnectGateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IConnectGateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectGateRequest message, length delimited. Does not implicitly {@link msg.ConnectGateRequest.verify|verify} messages.
         * @param message ConnectGateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IConnectGateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectGateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectGateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.ConnectGateRequest;

        /**
         * Decodes a ConnectGateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectGateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.ConnectGateRequest;

        /**
         * Verifies a ConnectGateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectGateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectGateRequest
         */
        public static fromObject(object: { [k: string]: any }): msg.ConnectGateRequest;

        /**
         * Creates a plain object from a ConnectGateRequest message. Also converts values to other types if specified.
         * @param message ConnectGateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.ConnectGateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectGateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConnectGateResponse. */
    interface IConnectGateResponse {

        /** ConnectGateResponse rpcid */
        rpcid?: (number|null);

        /** ConnectGateResponse code */
        code?: (number|null);

        /** ConnectGateResponse key */
        key?: (string|null);
    }

    /** Represents a ConnectGateResponse. */
    class ConnectGateResponse implements IConnectGateResponse {

        /**
         * Constructs a new ConnectGateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IConnectGateResponse);

        /** ConnectGateResponse rpcid. */
        public rpcid: number;

        /** ConnectGateResponse code. */
        public code: number;

        /** ConnectGateResponse key. */
        public key: string;

        /**
         * Creates a new ConnectGateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectGateResponse instance
         */
        public static create(properties?: msg.IConnectGateResponse): msg.ConnectGateResponse;

        /**
         * Encodes the specified ConnectGateResponse message. Does not implicitly {@link msg.ConnectGateResponse.verify|verify} messages.
         * @param message ConnectGateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IConnectGateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectGateResponse message, length delimited. Does not implicitly {@link msg.ConnectGateResponse.verify|verify} messages.
         * @param message ConnectGateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IConnectGateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectGateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectGateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.ConnectGateResponse;

        /**
         * Decodes a ConnectGateResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectGateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.ConnectGateResponse;

        /**
         * Verifies a ConnectGateResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectGateResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectGateResponse
         */
        public static fromObject(object: { [k: string]: any }): msg.ConnectGateResponse;

        /**
         * Creates a plain object from a ConnectGateResponse message. Also converts values to other types if specified.
         * @param message ConnectGateResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.ConnectGateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectGateResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateRoomRequest. */
    interface ICreateRoomRequest {

        /** CreateRoomRequest rpcid */
        rpcid?: (number|null);

        /** CreateRoomRequest playerId */
        playerId?: (number|null);
    }

    /** Represents a CreateRoomRequest. */
    class CreateRoomRequest implements ICreateRoomRequest {

        /**
         * Constructs a new CreateRoomRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ICreateRoomRequest);

        /** CreateRoomRequest rpcid. */
        public rpcid: number;

        /** CreateRoomRequest playerId. */
        public playerId: number;

        /**
         * Creates a new CreateRoomRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRoomRequest instance
         */
        public static create(properties?: msg.ICreateRoomRequest): msg.CreateRoomRequest;

        /**
         * Encodes the specified CreateRoomRequest message. Does not implicitly {@link msg.CreateRoomRequest.verify|verify} messages.
         * @param message CreateRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ICreateRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateRoomRequest message, length delimited. Does not implicitly {@link msg.CreateRoomRequest.verify|verify} messages.
         * @param message CreateRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ICreateRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateRoomRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.CreateRoomRequest;

        /**
         * Decodes a CreateRoomRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.CreateRoomRequest;

        /**
         * Verifies a CreateRoomRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateRoomRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateRoomRequest
         */
        public static fromObject(object: { [k: string]: any }): msg.CreateRoomRequest;

        /**
         * Creates a plain object from a CreateRoomRequest message. Also converts values to other types if specified.
         * @param message CreateRoomRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.CreateRoomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateRoomRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateRoomResponse. */
    interface ICreateRoomResponse {

        /** CreateRoomResponse rpcid */
        rpcid?: (number|null);

        /** CreateRoomResponse roomId */
        roomId?: (number|null);
    }

    /** Represents a CreateRoomResponse. */
    class CreateRoomResponse implements ICreateRoomResponse {

        /**
         * Constructs a new CreateRoomResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ICreateRoomResponse);

        /** CreateRoomResponse rpcid. */
        public rpcid: number;

        /** CreateRoomResponse roomId. */
        public roomId: number;

        /**
         * Creates a new CreateRoomResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRoomResponse instance
         */
        public static create(properties?: msg.ICreateRoomResponse): msg.CreateRoomResponse;

        /**
         * Encodes the specified CreateRoomResponse message. Does not implicitly {@link msg.CreateRoomResponse.verify|verify} messages.
         * @param message CreateRoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ICreateRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateRoomResponse message, length delimited. Does not implicitly {@link msg.CreateRoomResponse.verify|verify} messages.
         * @param message CreateRoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ICreateRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateRoomResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.CreateRoomResponse;

        /**
         * Decodes a CreateRoomResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.CreateRoomResponse;

        /**
         * Verifies a CreateRoomResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateRoomResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateRoomResponse
         */
        public static fromObject(object: { [k: string]: any }): msg.CreateRoomResponse;

        /**
         * Creates a plain object from a CreateRoomResponse message. Also converts values to other types if specified.
         * @param message CreateRoomResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.CreateRoomResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateRoomResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterRoomRequest. */
    interface IEnterRoomRequest {

        /** EnterRoomRequest rpcid */
        rpcid?: (number|null);

        /** EnterRoomRequest playerId */
        playerId?: (number|null);

        /** EnterRoomRequest roomId */
        roomId?: (number|null);
    }

    /** Represents an EnterRoomRequest. */
    class EnterRoomRequest implements IEnterRoomRequest {

        /**
         * Constructs a new EnterRoomRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IEnterRoomRequest);

        /** EnterRoomRequest rpcid. */
        public rpcid: number;

        /** EnterRoomRequest playerId. */
        public playerId: number;

        /** EnterRoomRequest roomId. */
        public roomId: number;

        /**
         * Creates a new EnterRoomRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterRoomRequest instance
         */
        public static create(properties?: msg.IEnterRoomRequest): msg.EnterRoomRequest;

        /**
         * Encodes the specified EnterRoomRequest message. Does not implicitly {@link msg.EnterRoomRequest.verify|verify} messages.
         * @param message EnterRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IEnterRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterRoomRequest message, length delimited. Does not implicitly {@link msg.EnterRoomRequest.verify|verify} messages.
         * @param message EnterRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IEnterRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterRoomRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.EnterRoomRequest;

        /**
         * Decodes an EnterRoomRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.EnterRoomRequest;

        /**
         * Verifies an EnterRoomRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterRoomRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterRoomRequest
         */
        public static fromObject(object: { [k: string]: any }): msg.EnterRoomRequest;

        /**
         * Creates a plain object from an EnterRoomRequest message. Also converts values to other types if specified.
         * @param message EnterRoomRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.EnterRoomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterRoomRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterRoomResponse. */
    interface IEnterRoomResponse {

        /** EnterRoomResponse rpcid */
        rpcid?: (number|null);

        /** EnterRoomResponse playerId */
        playerId?: (number|null);

        /** EnterRoomResponse roomId */
        roomId?: (number|null);
    }

    /** Represents an EnterRoomResponse. */
    class EnterRoomResponse implements IEnterRoomResponse {

        /**
         * Constructs a new EnterRoomResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IEnterRoomResponse);

        /** EnterRoomResponse rpcid. */
        public rpcid: number;

        /** EnterRoomResponse playerId. */
        public playerId: number;

        /** EnterRoomResponse roomId. */
        public roomId: number;

        /**
         * Creates a new EnterRoomResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterRoomResponse instance
         */
        public static create(properties?: msg.IEnterRoomResponse): msg.EnterRoomResponse;

        /**
         * Encodes the specified EnterRoomResponse message. Does not implicitly {@link msg.EnterRoomResponse.verify|verify} messages.
         * @param message EnterRoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IEnterRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterRoomResponse message, length delimited. Does not implicitly {@link msg.EnterRoomResponse.verify|verify} messages.
         * @param message EnterRoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IEnterRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterRoomResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.EnterRoomResponse;

        /**
         * Decodes an EnterRoomResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.EnterRoomResponse;

        /**
         * Verifies an EnterRoomResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterRoomResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterRoomResponse
         */
        public static fromObject(object: { [k: string]: any }): msg.EnterRoomResponse;

        /**
         * Creates a plain object from an EnterRoomResponse message. Also converts values to other types if specified.
         * @param message EnterRoomResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.EnterRoomResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterRoomResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QuitRoomRequest. */
    interface IQuitRoomRequest {

        /** QuitRoomRequest rpcid */
        rpcid?: (number|null);

        /** QuitRoomRequest playerId */
        playerId?: (number|null);

        /** QuitRoomRequest roomId */
        roomId?: (number|null);
    }

    /** Represents a QuitRoomRequest. */
    class QuitRoomRequest implements IQuitRoomRequest {

        /**
         * Constructs a new QuitRoomRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IQuitRoomRequest);

        /** QuitRoomRequest rpcid. */
        public rpcid: number;

        /** QuitRoomRequest playerId. */
        public playerId: number;

        /** QuitRoomRequest roomId. */
        public roomId: number;

        /**
         * Creates a new QuitRoomRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuitRoomRequest instance
         */
        public static create(properties?: msg.IQuitRoomRequest): msg.QuitRoomRequest;

        /**
         * Encodes the specified QuitRoomRequest message. Does not implicitly {@link msg.QuitRoomRequest.verify|verify} messages.
         * @param message QuitRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IQuitRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuitRoomRequest message, length delimited. Does not implicitly {@link msg.QuitRoomRequest.verify|verify} messages.
         * @param message QuitRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IQuitRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuitRoomRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuitRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.QuitRoomRequest;

        /**
         * Decodes a QuitRoomRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuitRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.QuitRoomRequest;

        /**
         * Verifies a QuitRoomRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuitRoomRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuitRoomRequest
         */
        public static fromObject(object: { [k: string]: any }): msg.QuitRoomRequest;

        /**
         * Creates a plain object from a QuitRoomRequest message. Also converts values to other types if specified.
         * @param message QuitRoomRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.QuitRoomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuitRoomRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QuitRoomResponse. */
    interface IQuitRoomResponse {

        /** QuitRoomResponse rpcid */
        rpcid?: (number|null);

        /** QuitRoomResponse playerId */
        playerId?: (number|null);
    }

    /** Represents a QuitRoomResponse. */
    class QuitRoomResponse implements IQuitRoomResponse {

        /**
         * Constructs a new QuitRoomResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IQuitRoomResponse);

        /** QuitRoomResponse rpcid. */
        public rpcid: number;

        /** QuitRoomResponse playerId. */
        public playerId: number;

        /**
         * Creates a new QuitRoomResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuitRoomResponse instance
         */
        public static create(properties?: msg.IQuitRoomResponse): msg.QuitRoomResponse;

        /**
         * Encodes the specified QuitRoomResponse message. Does not implicitly {@link msg.QuitRoomResponse.verify|verify} messages.
         * @param message QuitRoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IQuitRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuitRoomResponse message, length delimited. Does not implicitly {@link msg.QuitRoomResponse.verify|verify} messages.
         * @param message QuitRoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IQuitRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuitRoomResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuitRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.QuitRoomResponse;

        /**
         * Decodes a QuitRoomResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuitRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.QuitRoomResponse;

        /**
         * Verifies a QuitRoomResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuitRoomResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuitRoomResponse
         */
        public static fromObject(object: { [k: string]: any }): msg.QuitRoomResponse;

        /**
         * Creates a plain object from a QuitRoomResponse message. Also converts values to other types if specified.
         * @param message QuitRoomResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.QuitRoomResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuitRoomResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MatchRequest. */
    interface IMatchRequest {

        /** MatchRequest rpcid */
        rpcid?: (number|null);

        /** MatchRequest roomId */
        roomId?: (number|null);
    }

    /** Represents a MatchRequest. */
    class MatchRequest implements IMatchRequest {

        /**
         * Constructs a new MatchRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMatchRequest);

        /** MatchRequest rpcid. */
        public rpcid: number;

        /** MatchRequest roomId. */
        public roomId: number;

        /**
         * Creates a new MatchRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchRequest instance
         */
        public static create(properties?: msg.IMatchRequest): msg.MatchRequest;

        /**
         * Encodes the specified MatchRequest message. Does not implicitly {@link msg.MatchRequest.verify|verify} messages.
         * @param message MatchRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMatchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MatchRequest message, length delimited. Does not implicitly {@link msg.MatchRequest.verify|verify} messages.
         * @param message MatchRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMatchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MatchRequest;

        /**
         * Decodes a MatchRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MatchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MatchRequest;

        /**
         * Verifies a MatchRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MatchRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MatchRequest
         */
        public static fromObject(object: { [k: string]: any }): msg.MatchRequest;

        /**
         * Creates a plain object from a MatchRequest message. Also converts values to other types if specified.
         * @param message MatchRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MatchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MatchRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MatchResponse. */
    interface IMatchResponse {

        /** MatchResponse rpcid */
        rpcid?: (number|null);

        /** MatchResponse code */
        code?: (number|null);
    }

    /** Represents a MatchResponse. */
    class MatchResponse implements IMatchResponse {

        /**
         * Constructs a new MatchResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMatchResponse);

        /** MatchResponse rpcid. */
        public rpcid: number;

        /** MatchResponse code. */
        public code: number;

        /**
         * Creates a new MatchResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchResponse instance
         */
        public static create(properties?: msg.IMatchResponse): msg.MatchResponse;

        /**
         * Encodes the specified MatchResponse message. Does not implicitly {@link msg.MatchResponse.verify|verify} messages.
         * @param message MatchResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MatchResponse message, length delimited. Does not implicitly {@link msg.MatchResponse.verify|verify} messages.
         * @param message MatchResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MatchResponse;

        /**
         * Decodes a MatchResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MatchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MatchResponse;

        /**
         * Verifies a MatchResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MatchResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MatchResponse
         */
        public static fromObject(object: { [k: string]: any }): msg.MatchResponse;

        /**
         * Creates a plain object from a MatchResponse message. Also converts values to other types if specified.
         * @param message MatchResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MatchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MatchResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CancelMatchRequest. */
    interface ICancelMatchRequest {

        /** CancelMatchRequest rpcid */
        rpcid?: (number|null);

        /** CancelMatchRequest roomId */
        roomId?: (number|null);
    }

    /** Represents a CancelMatchRequest. */
    class CancelMatchRequest implements ICancelMatchRequest {

        /**
         * Constructs a new CancelMatchRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ICancelMatchRequest);

        /** CancelMatchRequest rpcid. */
        public rpcid: number;

        /** CancelMatchRequest roomId. */
        public roomId: number;

        /**
         * Creates a new CancelMatchRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelMatchRequest instance
         */
        public static create(properties?: msg.ICancelMatchRequest): msg.CancelMatchRequest;

        /**
         * Encodes the specified CancelMatchRequest message. Does not implicitly {@link msg.CancelMatchRequest.verify|verify} messages.
         * @param message CancelMatchRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ICancelMatchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CancelMatchRequest message, length delimited. Does not implicitly {@link msg.CancelMatchRequest.verify|verify} messages.
         * @param message CancelMatchRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ICancelMatchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelMatchRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelMatchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.CancelMatchRequest;

        /**
         * Decodes a CancelMatchRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelMatchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.CancelMatchRequest;

        /**
         * Verifies a CancelMatchRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CancelMatchRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CancelMatchRequest
         */
        public static fromObject(object: { [k: string]: any }): msg.CancelMatchRequest;

        /**
         * Creates a plain object from a CancelMatchRequest message. Also converts values to other types if specified.
         * @param message CancelMatchRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.CancelMatchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CancelMatchRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CancelMatchResponse. */
    interface ICancelMatchResponse {

        /** CancelMatchResponse rpcid */
        rpcid?: (number|null);

        /** CancelMatchResponse code */
        code?: (number|null);
    }

    /** Represents a CancelMatchResponse. */
    class CancelMatchResponse implements ICancelMatchResponse {

        /**
         * Constructs a new CancelMatchResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ICancelMatchResponse);

        /** CancelMatchResponse rpcid. */
        public rpcid: number;

        /** CancelMatchResponse code. */
        public code: number;

        /**
         * Creates a new CancelMatchResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelMatchResponse instance
         */
        public static create(properties?: msg.ICancelMatchResponse): msg.CancelMatchResponse;

        /**
         * Encodes the specified CancelMatchResponse message. Does not implicitly {@link msg.CancelMatchResponse.verify|verify} messages.
         * @param message CancelMatchResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ICancelMatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CancelMatchResponse message, length delimited. Does not implicitly {@link msg.CancelMatchResponse.verify|verify} messages.
         * @param message CancelMatchResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ICancelMatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelMatchResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelMatchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.CancelMatchResponse;

        /**
         * Decodes a CancelMatchResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelMatchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.CancelMatchResponse;

        /**
         * Verifies a CancelMatchResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CancelMatchResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CancelMatchResponse
         */
        public static fromObject(object: { [k: string]: any }): msg.CancelMatchResponse;

        /**
         * Creates a plain object from a CancelMatchResponse message. Also converts values to other types if specified.
         * @param message CancelMatchResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.CancelMatchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CancelMatchResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MatchSuccess. */
    interface IMatchSuccess {

        /** MatchSuccess rpcid */
        rpcid?: (number|null);

        /** MatchSuccess code */
        code?: (number|null);
    }

    /** Represents a MatchSuccess. */
    class MatchSuccess implements IMatchSuccess {

        /**
         * Constructs a new MatchSuccess.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IMatchSuccess);

        /** MatchSuccess rpcid. */
        public rpcid: number;

        /** MatchSuccess code. */
        public code: number;

        /**
         * Creates a new MatchSuccess instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchSuccess instance
         */
        public static create(properties?: msg.IMatchSuccess): msg.MatchSuccess;

        /**
         * Encodes the specified MatchSuccess message. Does not implicitly {@link msg.MatchSuccess.verify|verify} messages.
         * @param message MatchSuccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IMatchSuccess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MatchSuccess message, length delimited. Does not implicitly {@link msg.MatchSuccess.verify|verify} messages.
         * @param message MatchSuccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IMatchSuccess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchSuccess message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.MatchSuccess;

        /**
         * Decodes a MatchSuccess message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MatchSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.MatchSuccess;

        /**
         * Verifies a MatchSuccess message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MatchSuccess message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MatchSuccess
         */
        public static fromObject(object: { [k: string]: any }): msg.MatchSuccess;

        /**
         * Creates a plain object from a MatchSuccess message. Also converts values to other types if specified.
         * @param message MatchSuccess
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.MatchSuccess, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MatchSuccess to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
