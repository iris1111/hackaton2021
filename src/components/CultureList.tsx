import { Table } from "antd";

function CultureList(props) {
  const columns = [
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Температура",
      dataIndex: "tempStart",
      key: "tempStart",
    },
    {
      title: "Почва",
      dataIndex: "pochva",
      key: "pochva",
    },
  ];

  return <Table dataSource={props.data} columns={columns} />;
}

export default CultureList;
