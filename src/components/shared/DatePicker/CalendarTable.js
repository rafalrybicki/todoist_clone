import React from 'react';
import styled from 'styled-components/macro';

const StyledCalendarTable = styled.table`
   width: 100%;
   position: relative;
   border-spacing: 0;
   font-size: 13px;
   padding: 0 3px 3px;

   thead::after {
      content: '';
      position: absolute;
      top: 20px;
      left: -2px;
      display: block;
      width: 250px;
      height: 1px;
      background-color: #dddddd;
   }

   tr {
      width: 100%;
      display: flex;

      th {
         font-weight: 400;
         font-size: 10px;
         color: #808080;
         flex-grow: 1;
      }

      td button {
         background-color: red;
         width: 24px;
         height: 24px;
         border-radius: 50%;
         display: flex;
         justify-content: center;
         align-items: center;
         margin-bottom: 0.5px;
         color: white;
         font-weight: 600;
         padding-top: 1px;
      }

      th, td {
         width: calc(100% / 7);
         height: 24px;
         display: flex;
         justify-content: center;
         align-items: center;
      }
   }
`

function Months() {
   return (
      <StyledCalendarTable>
         <thead>
            <tr>
               <th>M</th>
               <th>T</th>
               <th>W</th>
               <th>T</th>
               <th>F</th>
               <th>S</th>
               <th>S</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td>1</td>
               <td>2</td>
               <td>3</td>
            </tr>
            <tr>
               <td>4</td>
               <td>5</td>
               <td>6</td>
               <td>7</td>
               <td>8</td>
               <td>9</td>
               <td>10</td>
            </tr>
            <tr>
               <td>11</td>
               <td>12</td>
               <td>13</td>
               <td>14</td>
               <td>15</td>
               <td>16</td>
               <td>17</td>
            </tr>
            <tr>
               <td>18</td>
               <td>19</td>
               <td>20</td>
               <td>21</td>
               <td>22</td>
               <td>23</td>
               <td>24</td>
            </tr>
            <tr>
               <td>25</td>
               <td>26</td>
               <td>28</td>
               <td>29</td>
               <td>30</td>
               <td><button>31</button></td>
               <td></td>
            </tr>
         </tbody>
      </StyledCalendarTable>
   )
}

export default Months
