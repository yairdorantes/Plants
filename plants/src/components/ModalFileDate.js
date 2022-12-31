import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import OutsideClickHandler from "react-outside-click-handler";
import { format } from "date-fns";

const ModalFileDate = () => {
  const [humanFormat, setHumanFormat] = useState();
  const [selected, setSelected] = useState();
  const [message, setMessage] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handlePhotoData = () => {
    if (humanFormat != undefined && image != "" && name != "") {
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
    setImage(e.target.files[0]);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    try {
      setHumanFormat(format(selected, "PP"));
    } catch (error) {
      //lmao who cares
    }
  }, [selected]);

  return (
    <div>
      {/* Put this part before </body> tag */}

      <input type="checkbox" id="my-modal-7" className="modal-toggle" />

      <label
        id="modal-track"
        htmlFor="my-modal-7"
        className="modal cursor-pointer "
      >
        <label
          className="modal-box relative flex flex-col items-center "
          htmlFor=""
        >
          <label
            htmlFor="my-modal-7"
            className="btn btn-sm btn-circle absolute right-2 top-2 "
          >
            ✕
          </label>

          <h3 className="text-lg font-bold">Add to the tracking</h3>

          <input
            type="text"
            placeholder="Name:"
            onChange={handleName}
            className="input input-bordered w-full max-w-xs"
          />
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
    </div>
  );
};

export default ModalFileDate;
