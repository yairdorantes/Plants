import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import OutsideClickHandler from "react-outside-click-handler";
import { format } from "date-fns";

import born from "../media/born.png";
import "react-day-picker/dist/style.css";

const plant = {
  name: "plant",
  type: "object",
};

const PlantView = () => {
  const [track, setTrack] = useState(false);
  const [message, setMessage] = useState(false);
  const [selected, setSelected] = useState();
  const [humanFormat, setHumanFormat] = useState();
  const [image, setImage] = useState("");
  const [showInfo, setShowInfo] = useState(true);
  const [info, setInfo] = useState("");
  const handleTrack = () => {
    track ? setTrack(false) : setTrack(true);
  };
  const updateInfo = (e) => {
    setInfo(e.target.value);
  };
  const sendInfo = (e) => {
    alert(info);
  };
  const hideTrack = () => {
    setTrack(false);
  };
  const handleShowInfo = () => {
    showInfo ? setShowInfo(false) : setShowInfo(true);
  };
  const handlePhotoData = () => {
    if (humanFormat != undefined && image != "") {
      console.log(humanFormat);
      console.log(image);
    } else {
      setMessage(true);
      setTimeout(() => {
        setMessage(false);
      }, 4000);
    }
  };
  const handleFile = (e) => {
    console.log(e.target.value);
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    try {
      setHumanFormat(format(selected, "PP"));
    } catch (error) {
      //lmao who cares
    }
  }, [selected]);

  return (
    <div className="container mx-auto flex flex-col gap-5  items-center mt-10">
      <div className="text-4xl font-black text-green-300">Buganvilia</div>
      <img
        className="mask mask-squircle "
        src="https://placeimg.com/250/250/nature"
      />
      <div className="flex items-cente gap-3">
        <img className="w-7" src={born} alt="" />
        <div className="font-bold">November 17th, 2014</div>
      </div>
      {/* tracking phots */}
      <div
        className={`collapse ${
          showInfo ? "collapse-open" : "collapse-close"
        } collapse-arrow border border-base-300 bg-base-100 rounded-box`}
      >
        <div
          onClick={handleShowInfo}
          className="collapse-title text-xl font-medium "
        >
          Data 🛈
        </div>

        <div className="collapse-content">
          <div>Here you can add extra data about your plant</div>
          <ul className="list-disc text-xl">
            <li>
              Now this is a story all about how, my life got flipped-turned
              upside down
            </li>
            <li>
              Now this is a story all about how, my life got flipped-turned
              upside down
            </li>
          </ul>
        </div>
        {/* <div>jaaj</div> */}
      </div>

      <label htmlFor="my-modal-5" className="btn btn-primary">
        add info
      </label>

      <OutsideClickHandler onOutsideClick={hideTrack}>
        <div
          // tabIndex={0}
          className={`collapse ${
            track ? "collapse-open" : "collapse-close"
          } collapse-arrow border border-base-300 bg-base-100 rounded-box`}
        >
          <div
            onClick={handleTrack}
            className="collapse-title text-xl font-medium "
          >
            Tracking 📸
          </div>

          <div className="collapse-content">
            <div>
              <ul className="steps steps-vertical ">
                <li data-content="●" className="step step-primary">
                  <div className="flex justify-center items-center gap-5">
                    <img
                      className="rounded-full mb-3"
                      src="https://placeimg.com/180/180/nature"
                      alt=""
                    />
                    <div>November 17th, 2014</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </OutsideClickHandler>

      <label htmlFor="my-modal-4" className="btn btn-success">
        add tracking
      </label>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label
        id="modal-track"
        htmlFor="my-modal-4"
        className="modal cursor-pointer "
      >
        <label
          className="modal-box relative flex flex-col items-center "
          htmlFor=""
        >
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-circle absolute right-2 top-2 "
          >
            ✕
          </label>

          <h3 className="text-lg font-bold">Add to the tracking</h3>
          <input
            type="file"
            className="file-input w-full max-w-xs mt-4"
            onChange={handleFile}
          />
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            // footer={footer}
          />
          <div className="font-bold -mt-2">{humanFormat}</div>
          <button
            onClick={handlePhotoData}
            className="btn btn-primary mt-5 w-full"
          >
            Enviar
          </button>
          {message && (
            <div className="alert alert-error shadow-lg mt-5 absolute -top-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Fill correctly all the fields</span>
              </div>
            </div>
          )}
        </label>
      </label>
      {/*ENDS tracking phots */}

      {/* modal add data */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <label
        id="modal-track"
        htmlFor="my-modal-5"
        className="modal cursor-pointer "
      >
        <label
          className="modal-box relative flex flex-col items-center "
          htmlFor=""
        >
          <label
            htmlFor="my-modal-5"
            className="btn btn-sm btn-circle absolute right-2 top-2 "
          >
            ✕
          </label>

          <h3 className="text-lg font-bold">Add to the tracking</h3>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered  w-full max-w-xs"
            onChange={updateInfo}
          />
          <button onClick={sendInfo} className="btn btn-secondary mt-5 w-full">
            Enviar
          </button>
          {message && (
            <div className="alert alert-error shadow-lg mt-5 absolute -top-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Fill correctly all the fields</span>
              </div>
            </div>
          )}
        </label>
      </label>
      {/* ends modal add data */}
    </div>
  );
};

export default PlantView;
