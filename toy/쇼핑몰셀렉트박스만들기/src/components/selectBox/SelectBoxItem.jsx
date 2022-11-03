import React, { useEffect } from 'react';
import styled from 'styled-components';
import arrowDownIcon from '../../assets/icon/arrow_down.png';

const StyledSelectBox = styled.select`
  margin-bottom: 10px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #aaa;
  padding: 10px 15px;
  font-size: 14px;
  background: url(${arrowDownIcon}) no-repeat 97% 50%;
  background-color: #fff;
  background-size: 14px;
  appearance: none;
`;

export default function SelectBox({
  title,
  groupList,
  countList,
  isDisabled,
  setIsDisabled,
  index,
  selectBoxValues,
  setSelectBoxValues,
  beforeSelectValue,
}) {
  const { options } = groupList.filter((group) => {
    return group.title === title;
  })[0];

  function getOptionTagsJustShow() {
    return options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  }

  function getOptionTags(beforeSelectValue) {
    if (!beforeSelectValue) return;

    // console.log(selectBoxValues);
    // console.log(options);
    // console.log(countList);

    // debugger;
    // 방법 2
    const filteredList = countList.filter((item, i) => {
      let flag = true;
      const len =
        selectBoxValues.length === groupList.length
          ? selectBoxValues.length - 1
          : selectBoxValues.length;

      for (let i = 0; i < len; i++) {
        const selectValue = selectBoxValues[i];
        if (!item.combination.includes(selectValue)) {
          flag = false;
        }
      }

      return flag;
    });

    // console.log('filteredList', filteredList);

    const optionsTags = filteredList.map((item, i) => {
      if (!item.remainCount) {
        return (
          <option
            disabled
            key={item.combination[0] + i}
            value={item.combination[index]}
          >{`${item.combination[index]} (품절)`}</option>
        );
      } else {
        return (
          <option
            key={item.combination[0] + i}
            value={item.combination[index]}
          >{`${item.combination[index]} (${item.remainCount}개 구매가능)`}</option>
        );
      }
    });

    return optionsTags;
    // // 방법 2

    // debugger;
    // 방법 1
    // const filteredList = countList.filter((item) => {
    //   return item.combination[index - 1] === beforeSelectValue;
    // });

    // const optionsTags = filteredList.map((item, i) => {
    //   if (!item.remainCount) {
    //     return (
    //       <option
    //         disabled
    //         key={item.combination[0] + i}
    //         value={item.combination[index]}
    //       >{`${item.combination[index]} (품절)`}</option>
    //     );
    //   } else {
    //     return (
    //       <option
    //         key={item.combination[0] + i}
    //         value={item.combination[index]}
    //       >{`${item.combination[index]} (${item.remainCount}개 구매가능)`}</option>
    //     );
    //   }
    // });

    // return optionsTags;
    // // 방법 1
  }

  console.log(index, isDisabled);

  return (
    <StyledSelectBox
      disabled={isDisabled}
      onChange={(e) => {
        const { target } = e;
        target.children[0].disabled = true;

        const selectBoxList = target.parentElement.children;

        if (target === selectBoxList[0]) {
          setSelectBoxValues([target.value]);
          setIsDisabled([
            false,
            // false,
            ...new Array(groupList.length - 1).fill(true),
          ]);
        } else {
          setSelectBoxValues(
            Array.from(selectBoxList).map((selectBox) => selectBox.value)
          );

          setIsDisabled((prev) => {
            if (index !== groupList.length - 1) {
              prev[index + 1] = false;
            }

            return [...prev];
          });
        }

        setIsDisabled((prev) => {
          if (index !== groupList.length - 1) {
            prev[index + 1] = false;
          }

          return [...prev];
        });
      }}
    >
      <option value="">{title}</option>
      {beforeSelectValue && index === groupList.length - 1
        ? getOptionTags(beforeSelectValue)
        : getOptionTagsJustShow()}
    </StyledSelectBox>
  );
}
