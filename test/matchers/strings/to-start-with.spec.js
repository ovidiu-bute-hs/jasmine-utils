/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2014-2017 Mickael Jeanroy
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import {toStartWith} from '../../../src/core/matchers/strings/to-start-with.js';

describe('toStartWith', () => {
  it('should check that object is a string starting with given preifx', () => {
    const actual = 'foo';
    const other = 'fo';
    const result = toStartWith({actual}, other);
    expect(result).toEqual({
      pass: true,
      message: `Expect 'foo' {{not}} to start with 'fo'`,
    });
  });

  it('should not pass without a string starting with an other prefix', () => {
    const actual = 'test';
    const other = 'testtest';
    const result = toStartWith({actual}, other);
    expect(result).toEqual({
      pass: false,
      message: `Expect 'test' {{not}} to start with 'testtest'`,
    });
  });
});
