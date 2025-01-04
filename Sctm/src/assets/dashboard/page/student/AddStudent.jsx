import React from 'react';
import {PageTopBarWithSubTitle} from '../../../component/pageTopBar';
import {SlGraduation} from 'react-icons/sl';

export const AddStudent = () => {
  return (
    <>
      <PageTopBarWithSubTitle
        icon={<SlGraduation />}
        title="Student"
        subTitle="Add student"
      />
    </>
  );
};
