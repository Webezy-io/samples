/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as Health_pb from './Health_pb';


export class HealthCheckClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCheck = new grpcWeb.MethodDescriptor(
    '/HealthCheck/Check',
    grpcWeb.MethodType.UNARY,
    Health_pb.HealthCheckRequest,
    Health_pb.HealthCheckResponse,
    (request: Health_pb.HealthCheckRequest) => {
      return request.serializeBinary();
    },
    Health_pb.HealthCheckResponse.deserializeBinary
  );

  check(
    request: Health_pb.HealthCheckRequest,
    metadata: grpcWeb.Metadata | null): Promise<Health_pb.HealthCheckResponse>;

  check(
    request: Health_pb.HealthCheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: Health_pb.HealthCheckResponse) => void): grpcWeb.ClientReadableStream<Health_pb.HealthCheckResponse>;

  check(
    request: Health_pb.HealthCheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: Health_pb.HealthCheckResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/HealthCheck/Check',
        request,
        metadata || {},
        this.methodDescriptorCheck,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/HealthCheck/Check',
    request,
    metadata || {},
    this.methodDescriptorCheck);
  }

}

