import React from 'react';
import {SlGraduation} from 'react-icons/sl';
import {PageTopBarWithBtn} from '../../../component/pageTopBar';
import {FiSearch} from 'react-icons/fi';
import {Button} from '@mui/material';
import {IoFilterOutline} from 'react-icons/io5';
export const Student = () => {
  return (
    <>
      <PageTopBarWithBtn
        icon={<SlGraduation />}
        title="Student"
        linkTitle="Add student"
        link="/"
      />
      <div className="SearchTopDiv">
        <div className="SearchBox my_mr">
          <span>
            <FiSearch />
          </span>
          <input type="text" placeholder="Search" />
        </div>
        <Button variant="outlined" className="btnWithIcon">
          <span>
            <IoFilterOutline />
          </span>
          Filter
        </Button>
      </div>
      <div>Student</div>
    </>
  );
};
