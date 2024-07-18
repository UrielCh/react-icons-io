import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MdBody icon from Ionicons 4
 * @module
 */
export function IoMdBody(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48c22 0 40 18 40 40s-18 40-40 40-40-18-40-40 18-40 40-40zm192 144.1H320V464h-42.7V320h-42.7v144H192V192.1H64v-42.7h384v42.7z"}}]})(props);
}
export default IoMdBody;
