import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MdList icon from Ionicons 4
 * @module
 */
export function IoMdList(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M80 280h256v48H80zM80 184h320v48H80zM80 88h352v48H80z"}},{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M80 376h288v48H80z"},child:[]}]}]})(props);
}
export default IoMdList;
