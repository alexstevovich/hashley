/* *******************************************************
 * hashley
 * 
 * @license
 * 
 * Apache-2.0
 * 
 * Copyright 2018-2025 Alex Stevovich
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 * @meta
 *
 * package_name: hashley
 * file_name: gen/index.cjs
 * purpose: Core functionality and exports combined.
 *  
 * @system
 *
 * generated_on: 2025-03-12T17:37:15.285Z
 * certified_version: 1.0.0
 * file_uuid: b794eb62-8bb6-4d1d-b67c-548a2fcc5b7f
 * file_size: 2494 bytes
 * file_hash: 6d1980c5d9c2ff430c32bbb89ea303f6173ef0c497e29b2aaef5b532a59a0d77
 * mast_hash: 0ef0ef50ccc6ccf3e79e379ed5ac18a75c9eb841482e5a6078f7f4b06f56460c
 * generated_by: preamble on npm!
 *
 * [Preamble Metadata]
********************************************************/ 
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  hash: () => hash
});
module.exports = __toCommonJS(index_exports);
var import_crypto = require("crypto");

function hash(input, algorithm = "sha256") {
  return (0, import_crypto.createHash)(algorithm).update(input, "utf8").digest("hex");
}
var index_default = hash;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  hash
});
