import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { selectFilter, setVisibilityFilter } from "./filterReducer";
import styles from "./MenuBar.module.css";

export default function MenuBar() {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleChange = useCallback(
    (event) => {
      dispatch(setVisibilityFilter(event.target.value));
    },
    [dispatch]
  );

  return (
    <div className={styles.menuBar}>
      <div className={classNames(styles.menu, styles.container)}>
        <select
          value={filter}
          className={styles.select}
          onChange={handleChange}
        >
          <option value="SHOW_ALL">All</option>
          <option value="SHOW_ACTIVE">Active</option>
          <option value="SHOW_COMPLETED">Completed</option>
        </select>
      </div>
    </div>
  );
}
