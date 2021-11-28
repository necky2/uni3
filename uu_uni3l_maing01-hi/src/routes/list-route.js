//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useDataList } from "uu5g04-hooks";
import Config from "./config/config";
import Uu5Tiles from "uu5tilesg02";
import Calls from "calls";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "ListRoute",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const ListRoute = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    const peopleDataList = useDataList({
      handlerMap: {
        load: Calls.listPeople,
        create: Calls.createPerson,
      },
      itemHandlerMap: {
        delete: Calls.deletePerson,
      },
    });

    //@@viewOn:private
    const _resolveState = () => {
      switch (peopleDataList.state) {
        case "pendingNoData":
          return <UU5.Bricks.Loading />;
        case "errorNoData":
          return <UU5.Common.Error />;
        default:
          return (
            <div>
              <Uu5Tiles.List
                data={peopleDataList.data}
                columns={[
                  {
                    key: "firstName",
                    cell: (cellProps) => cellProps.data.data.firstName,
                    header: "Jméno",
                  },
                  {
                    key: "age",
                    cell: (cellProps) => cellProps.data.data.age,
                    header: "Věk",
                  },
                  {
                    key: "delete",
                    cell: (cellProps) => (
                      <UU5.Bricks.Button
                        disabled={!cellProps.data.handlerMap.delete}
                        colorSchema="danger"
                        onClick={() => {
                          cellProps.data.handlerMap.delete();
                        }}
                      >
                        <UU5.Bricks.Icon icon="mdi-delete" />
                      </UU5.Bricks.Button>
                    ),
                    header: "Věk",
                  },
                ]}
              />
              <UU5.Forms.Form onSave={_saveForm}>
                <UU5.Forms.Text label="Jméno" name="firstName" />
                <UU5.Forms.Number label="Věk" name="age" />
                <UU5.Forms.Controls buttonSubmitProps={{ disabled: !peopleDataList.handlerMap.create }} />
              </UU5.Forms.Form>
            </div>
          );
      }
    };

    const _saveForm = ({ values }) => {
      peopleDataList.handlerMap.create(values);
    };
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return <UU5.Bricks.Container>{_resolveState()}</UU5.Bricks.Container>;
    //@@viewOff:render
  },
});

export default ListRoute;
