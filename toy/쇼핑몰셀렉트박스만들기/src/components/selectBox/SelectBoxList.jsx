import React, { useState } from 'react';
import SelectBoxItem from './SelectBoxItem';

export default function SelectBoxList({ data }) {
  const { titleList, groupList, countList } = data;
  const [isDisabled, setIsDisabled] = useState([
    false,
    ...new Array(titleList.length - 1).fill(true),
  ]);

  const [selectBoxValues, setSelectBoxValues] = useState([]);
  console.log(selectBoxValues);

  return titleList.map((title, i) => {
    return (
      <SelectBoxItem
        key={title}
        title={title}
        groupList={groupList}
        countList={countList}
        isDisabled={isDisabled[i]}
        setIsDisabled={setIsDisabled}
        index={i} //  몇번째 셀렉트박스인지 확인하기 위한 props
        selectBoxValues={selectBoxValues}
        setSelectBoxValues={setSelectBoxValues}
        beforeSelectValue={selectBoxValues[i - 1]}
      />
    );
  });
}
