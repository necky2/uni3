//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useDataObject } from "uu5g04-hooks";
import Config from "./config/config";
import Calls from "calls";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "DataLoading",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const DataLoading = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    const dataObject = useDataObject({
      handlerMap: {
        load: Calls.getPerson,
        update: Calls.updatePerson,
      },
      initialDtoIn: {
        id: "5",
      },
    });

    //@@viewOn:private
    const _resolveState = () => {
      switch (dataObject.state) {
        case "pendingNoData":
          return <UU5.Bricks.Loading />;
        case "errorNoData":
          return <UU5.Common.Error />;
        default:
          return (
            <div>
              <p>Jméno: {dataObject.data.firstName}</p>
              <p>Věk: {dataObject.data.age}</p>
            </div>
          );
      }
    };

    const _saveForm = ({ values }) => {
      dataObject.handlerMap.update(values);
    };
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <div>
        <h2>Data Loading</h2>
        {_resolveState()}
        <UU5.Forms.Form onSave={_saveForm}>
          <UU5.Forms.Text label="Jméno" name="firstName" />
          <UU5.Forms.Number label="Věk" name="age" />
          <UU5.Forms.Controls buttonSubmitProps={{ disabled: !dataObject.handlerMap.update }} />
        </UU5.Forms.Form>
      </div>
    );
    //@@viewOff:render
  },
});

export default DataLoading;
