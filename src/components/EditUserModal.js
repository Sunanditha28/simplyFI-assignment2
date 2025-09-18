import React from "react";
import { Modal, Form, Input } from "antd";

function EditUserModal({ user, onCancel, onSave }) {
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        onSave(user.id, values);
      })
      .catch((info) => {
        console.log("Validation Failed:", info);
      });
  };

  return (
    <Modal
      title="Edit User"
      visible={true}
      onCancel={onCancel}
      onOk={handleOk}
      okText="Save"
    >
      <Form form={form} layout="vertical" initialValues={user}>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please enter email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, message: "Please enter phone" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="website"
          label="Website"
          rules={[{ required: true, message: "Please enter website" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default EditUserModal;
