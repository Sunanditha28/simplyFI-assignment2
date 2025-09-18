import React from "react";
import { Modal, Descriptions } from "antd";

const UserModal = ({ visible, onClose, user }) => {
  if (!user) return null;

  return (
    <Modal open={visible} onCancel={onClose} footer={null} title={user.name}>
      <Descriptions column={1} bordered>
        <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
        <Descriptions.Item label="Phone">{user.phone}</Descriptions.Item>
        <Descriptions.Item label="Website">{user.website}</Descriptions.Item>
        <Descriptions.Item label="Address">
          {user.address.street}, {user.address.suite}, {user.address.city},{" "}
          {user.address.zipcode}
        </Descriptions.Item>
        <Descriptions.Item label="Company">{user.company.name}</Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default UserModal;
