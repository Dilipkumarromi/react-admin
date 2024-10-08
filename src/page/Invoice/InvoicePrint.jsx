import React from "react";

function InvoicePrint() {
  return (
    <>
      <div className=" bg-white">
        <div class="nk-block">
          <div class="invoice invoice-print">
            <div class="invoice-wrap">
              <div class="invoice-brand text-center">
                <img
                  src="../images/logo-dark.png"
                  srcset="/demo2/images/logo-dark2x.png 2x"
                  alt=""
                />
              </div>
              <div class="invoice-head">
                <div class="invoice-contact">
                  <span class="overline-title">Invoice To</span>
                  <div class="invoice-contact-info">
                    <h4 class="title">Gregory Anderson</h4>
                    <ul class="list-plain">
                      <li>
                        <em class="icon ni ni-map-pin-fill fs-18px"></em>
                        <span>
                          House #65, 4328 Marion Street
                          <br />
                          Newbury, VT 05051
                        </span>
                      </li>
                      <li>
                        <em class="icon ni ni-call-fill fs-14px"></em>
                        <span>+012 8764 556</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="invoice-desc">
                  <h3 class="title">Invoice</h3>
                  <ul class="list-plain">
                    <li class="invoice-id">
                      <span>Invoice ID</span>:<span>66K5W3</span>
                    </li>
                    <li class="invoice-date">
                      <span>Date</span>:<span>26 Jan, 2020</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="invoice-bills">
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>Item ID</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>24108054</td>
                        <td>
                          Dashlite - Conceptual App Dashboard - Regular License
                        </td>
                        <td>$40.00</td>
                        <td>5</td>
                        <td>$200.00</td>
                      </tr>
                      <tr>
                        <td>24108054</td>
                        <td>6 months premium support</td>
                        <td>$25.00</td>
                        <td>1</td>
                        <td>$25.00</td>
                      </tr>
                      <tr>
                        <td>23604094</td>
                        <td>Invest Management Dashboard - Regular License</td>
                        <td>$131.25</td>
                        <td>1</td>
                        <td>$131.25</td>
                      </tr>
                      <tr>
                        <td>23604094</td>
                        <td>6 months premium support</td>
                        <td>$78.75</td>
                        <td>1</td>
                        <td>$78.75</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colspan="2"></td>
                        <td colspan="2">Subtotal</td>
                        <td>$435.00</td>
                      </tr>
                      <tr>
                        <td colspan="2"></td>
                        <td colspan="2">Processing fee</td>
                        <td>$10.00</td>
                      </tr>
                      <tr>
                        <td colspan="2"></td>
                        <td colspan="2">TAX</td>
                        <td>$43.50</td>
                      </tr>
                      <tr>
                        <td colspan="2"></td>
                        <td colspan="2">Grand Total</td>
                        <td>$478.50</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvoicePrint;
