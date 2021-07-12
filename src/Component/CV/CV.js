/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { GET_DETAIL_USER } from "../../Redux/Const/API";
import MauCV1 from "./MauCV1";
import MauCV2 from "./MauCV2";
import MauCV3 from "./MauCV3";
import MauCV4 from "./MauCV4";
import MauCV5 from "./MauCV5";

import * as ReactBootStrap from "react-bootstrap";

export default function CV(id) {
  const [show1, setShow1] = useState(false);

  console.log(id);

  const [detail, setDetail] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get(`${GET_DETAIL_USER}${id.id}`);
    console.log(data.data);
    setDetail(data.data);
  }, []);
  console.log(detail.mauCvChinh);

  return (
    <div>
      {detail.mauCvChinh == 1 ? (
        <div>
          <ReactBootStrap.Button
            className="nutCV1 khungHinh my-2"
            variant=" "
            onClick={() => setShow1(true)}
          >
            {detail.hoVaTen}
          </ReactBootStrap.Button>
          <ReactBootStrap.Modal
            show={show1}
            onHide={() => setShow1(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <ReactBootStrap.Modal.Header closeButton>
              <ReactBootStrap.Modal.Title id="example-custom-modal-styling-title">
                CV Online
              </ReactBootStrap.Modal.Title>
            </ReactBootStrap.Modal.Header>
            <ReactBootStrap.Modal.Body style={{ width: "100%" }}>
              <MauCV1 {...detail} />
            </ReactBootStrap.Modal.Body>
          </ReactBootStrap.Modal>
        </div>
      ) : (
        ""
      )}

      {detail.mauCvChinh == 2 ? (
        <div>
          <ReactBootStrap.Button
            className="nutCV1 khungHinh my-2"
            variant=" "
            onClick={() => setShow1(true)}
          >
            {detail.hoVaTen}
          </ReactBootStrap.Button>
          <ReactBootStrap.Modal
            show={show1}
            onHide={() => setShow1(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <ReactBootStrap.Modal.Header closeButton>
              <ReactBootStrap.Modal.Title id="example-custom-modal-styling-title">
                CV Online
              </ReactBootStrap.Modal.Title>
            </ReactBootStrap.Modal.Header>
            <ReactBootStrap.Modal.Body style={{ width: "100%" }}>
              <MauCV5 {...detail} />
            </ReactBootStrap.Modal.Body>
          </ReactBootStrap.Modal>
        </div>
      ) : (
        ""
      )}

      {detail.mauCvChinh == 3 ? (
        <div>
          <ReactBootStrap.Button
            className="nutCV1 khungHinh my-2"
            variant=" "
            onClick={() => setShow1(true)}
          >
            {detail.hoVaTen}
          </ReactBootStrap.Button>
          <ReactBootStrap.Modal
            show={show1}
            onHide={() => setShow1(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <ReactBootStrap.Modal.Header closeButton>
              <ReactBootStrap.Modal.Title id="example-custom-modal-styling-title">
                CV Online
              </ReactBootStrap.Modal.Title>
            </ReactBootStrap.Modal.Header>
            <ReactBootStrap.Modal.Body style={{ width: "100%" }}>
              <MauCV2 {...detail} />
            </ReactBootStrap.Modal.Body>
          </ReactBootStrap.Modal>
        </div>
      ) : (
        ""
      )}

      {detail.mauCvChinh == 4 ? (
        <div>
          <ReactBootStrap.Button
            className="nutCV1 khungHinh my-2"
            variant=" "
            onClick={() => setShow1(true)}
          >
            {detail.hoVaTen}
          </ReactBootStrap.Button>
          <ReactBootStrap.Modal
            show={show1}
            onHide={() => setShow1(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <ReactBootStrap.Modal.Header closeButton>
              <ReactBootStrap.Modal.Title id="example-custom-modal-styling-title">
                CV Online
              </ReactBootStrap.Modal.Title>
            </ReactBootStrap.Modal.Header>
            <ReactBootStrap.Modal.Body style={{ width: "100%" }}>
              <MauCV3 {...detail} />
            </ReactBootStrap.Modal.Body>
          </ReactBootStrap.Modal>
        </div>
      ) : (
        ""
      )}

      {detail.mauCvChinh == 5 ? (
        <div>
          <ReactBootStrap.Button
            className="nutCV1 khungHinh my-2"
            variant=" "
            onClick={() => setShow1(true)}
          >
            {detail.hoVaTen}
          </ReactBootStrap.Button>
          <ReactBootStrap.Modal
            show={show1}
            onHide={() => setShow1(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <ReactBootStrap.Modal.Header closeButton>
              <ReactBootStrap.Modal.Title id="example-custom-modal-styling-title">
                CV Online
              </ReactBootStrap.Modal.Title>
            </ReactBootStrap.Modal.Header>
            <ReactBootStrap.Modal.Body style={{ width: "100%" }}>
              <MauCV4 {...detail} />
            </ReactBootStrap.Modal.Body>
          </ReactBootStrap.Modal>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
