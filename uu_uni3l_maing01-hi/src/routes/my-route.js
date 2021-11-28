//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Language from "../bricks/language";
import Dates from "../bricks/dates";
import Numbers from "../bricks/numbers";
import Authorization from "../bricks/authorization";
import DataLoading from "../bricks/data-loading";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "MyRoute",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const MyRoute = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <UU5.Bricks.Container>
        <Language />
        <Dates />
        <Numbers />
        <Authorization />
        <DataLoading />
      </UU5.Bricks.Container>
    );
    //@@viewOff:render
  },
});

export default MyRoute;
