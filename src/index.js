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
 * file_name: src/index.js
 * purpose: Core functionality and exports combined.
 *
 * @system
 *
 * generated_on: 2025-03-12T17:33:52.173Z
 * certified_version: 1.0.0
 * file_uuid: b794eb62-8bb6-4d1d-b67c-548a2fcc5b7f
 * file_size: 1441 bytes
 * file_hash: 740080d6028d436c78cae347ae8ca1777e7aca72a5331eef9ba9ba44dca7944b
 * mast_hash: ddc6242f37eec0387c0cb8ac411e02eb17941020d39dc8b010eac9a41767b36a
 * generated_by: preamble on npm!
 *
 * [Preamble Metadata]
 ********************************************************/
import { createHash } from 'crypto';

export function hash(input, algorithm = 'sha256') {
    return createHash(algorithm).update(input, 'utf8').digest('hex');
}

export default hash;
