import React from "react";
import styles from "./todo.module.css";
import InputField from "../input";

const Todo = ({
  content,
  id,
  handleDelete,
  handleEdit,
  inEditState,
  editValue,
  handleEditChange,
  handleSave,
}) => {
  return (
    <div className={styles.wrapper}>
      {inEditState ? (
        <InputField value={editValue} onChange={handleEditChange} />
      ) : (
        <p className={styles.content}>{content}</p>
      )}
      <div className={styles.actionWrapper}>
        {inEditState ? (
          <span className={styles.action} onClick={() => handleSave(id)}>
            save
          </span>
        ) : (
          <span
            className={styles.action}
            onClick={() => handleEdit(id, content)}
          >
            edit
          </span>
        )}
        <span className={styles.action} onClick={() => handleDelete(id)}>
          delete
        </span>
      </div>
    </div>
  );
};

export default Todo;
