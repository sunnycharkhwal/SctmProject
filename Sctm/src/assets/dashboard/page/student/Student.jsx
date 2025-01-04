import React, {useState} from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {SlGraduation} from 'react-icons/sl';
import {PageTopBarWithBtn} from '../../../component/pageTopBar';
import {FiSearch} from 'react-icons/fi';
import {Button} from '@mui/material';
import {IoFilterOutline} from 'react-icons/io5';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import {NewTooltip} from '../../../component/NewTooltip';
import {span} from 'framer-motion/client';

export const Student = () => {
  const [page, setPage] = useState(1);
  const count = 10; // Total number of pages

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleNext = () => {
    if (page < count) {
      setPage(page + 1);
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  return (
    <>
      <PageTopBarWithBtn
        icon={<SlGraduation />}
        title="Student"
        linkTitle="Add student"
        link="/dashboard/addStudent"
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
      <div className="my_con">
        <table className="table myTable">
          <thead>
            <tr>
              <th scope="col">Sl.no.</th>
              <th scope="col">ID</th>
              <th scope="col">Student name</th>
              <th scope="col">Class name</th>
              <th scope="col">Fees</th>
              <th scope="col">Fees mode</th>
              <th scope="col">Enrollment date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>S1</td>
              <td className="student_name">
                <NewTooltip
                  children={
                    <span>
                      {'Sunny charkhwal  A'.length > 10
                        ? `${' Sunny charkhwal A'.substring(0, 10)}...`
                        : ' Sunny charkhwal A'}
                    </span>
                  }
                  placement="top"
                  title="Sunny charkhwal  A"
                />

                <span className="tabelNew">New</span>
              </td>
              <td>Class name</td>
              <td>
                <span className="tabelPay">Fully paid</span>
              </td>
              <td>Online</td>
              <td>25 Dec 2024</td>
            </tr>
          </tbody>
        </table>
        <div className="PaginationDiv">
          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="center">
            <Button
              variant="text"
              onClick={handlePrevious}
              disabled={page === 1}
              className="PaginationBtn">
              <span>
                <KeyboardArrowLeftOutlinedIcon />
              </span>
              Previous
            </Button>
            <Pagination
              count={count}
              page={page}
              onChange={handleChange}
              color="primary"
            />
            <Button
              variant="text"
              onClick={handleNext}
              disabled={page === count}
              className="PaginationBtn">
              Next
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
};
