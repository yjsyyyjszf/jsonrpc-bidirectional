"use strict";

/**
 * Class representing the JSONRPC Exceptions.
 * @class
 * @extends Error
 */
module.exports=
class Exception extends Error
{
	/**
	 * @param {String} strMessage
	 * @param {Number} nCode
	 */
	constructor(strMessage, nCode)
	{
		super(strMessage);

		this.strMessage=strMessage;
		this.nCode=nCode;
	}

	/**
	 * Bad credentials (user, password, signing hash, account does not exist, etc.).
	 * Not part of JSON-RPC 2.0 spec.
	 *
	 * @returns {Number}
	 */
	static get NOT_AUTHENTICATED()
	{
		return -1;
	}

	/**
	 * The authenticated user is not authorized to make any or some requests.
	 * Not part of JSON-RPC 2.0 spec.
	 *
	 * @returns {Number}
	 */
	static get NOT_AUTHORIZED()
	{
		return -2;
	}

	/**
	 * The request has expired. The requester must create or obtain a new request.
	 * Not part of JSON-RPC 2.0 spec.
	 *
	 * @returns {Number}
	 */
	static get REQUEST_EXPIRED()
	{
		return -3;
	}

	/**
	 * Did not receive a proper response from the server.
	 * On HTTP, a HTTP response code was not received.
	 * Not part of JSON-RPC 2.0 spec.
	 *
	 * @returns {Number}
	 */
	static get NETWORK_ERROR()
	{
		return -4;
	}

	/**
	 * Parse error.
	 * Invalid JSON was received by the server.
	 * An error occurred on the server while parsing the JSON text.
	 *
	 * @returns {Number}
	 */
	static get PARSE_ERROR()
	{
		return 32700;
	}

	/**
	 * Invalid Request.
	 * The JSON sent is not a valid Request object.
	 *
	 * @returns {Number}
	 */
	static get INVALID_REQUEST()
	{
		return 32600;
	}

	/**
	 * Method not found.
	 * The method does not exist / is not available.
	 *
	 * @returns {Number}
	 */
	static get METHOD_NOT_FOUND()
	{
		return 32601;
	}

	/**
	 * Invalid params.
	 * Invalid method parameter(s).
	 *
	 * @returns {Number}
	 */
	static get INVALID_PARAMS()
	{
		return 32602;
	}

	/**
	 * Internal error.
	 * Internal JSON-RPC error.
	 *
	 * @returns {Number}
	 */
	static get INTERNAL_ERROR()
	{
		return 32603;
	}

	/**
	 * Invalid method return type.
	 *
	 * @returns {Number}
	 */
	static get INVALID_RETURN_TYPE()
	{
		return -32604;
	}

	// -32000 to -32099 Server error. Reserved for implementation-defined server-errors.
};