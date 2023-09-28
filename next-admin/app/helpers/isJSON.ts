export function isJSON(str: any): boolean {
  if (!str) return false;
  if (/^\s*$/.test(str)) return false;
  let testedStr: string = str;
  testedStr = testedStr.replace(/\\(?:["\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@');
  testedStr = testedStr.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/g, ']');
  testedStr = testedStr.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
  return (/^[\],:{}\s]*$/).test(testedStr);
}
