import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MdCafe icon from Ionicons 4
 * @module
 */
export function IoMdCafe(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 400h368v48H48zM424 64H80v224c0 44 36 80 80 80h144c44 0 80-36 80-80v-64h40c22 0 40-18 40-40v-80c0-22-18-40-40-40zm0 112h-40v-64h40v64z"}}]})(props);
}
export default IoMdCafe;
