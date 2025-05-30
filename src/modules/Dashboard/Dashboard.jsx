import React from "react";
import avatar from "../../assets/female.png";
import Input from "../../Components/Input/Input";
import "../../App.css"; // Adjust the path based on the actual location of App.css
const Dashboard = () => {
  const contact = [
    {
      name: "Jhon",
      status: "available",
      img: avatar,
    },
    {
      name: "Marry",
      status: "available",
      img: avatar,
    },
    {
      name: "Alexander",
      status: "available",
      img: avatar,
    },
    {
      name: "Adam",
      status: "available",
      img: avatar,
    },
    {
      name: "Alex",
      status: "available",
      img: avatar,
    },
    {
      name: "Larry",
      status: "available",
      img: avatar,
    },
  ];
  return (
    <div className="w-screen flex overflow-hidden">
      <div className="w-[25%]  h-screen  bg-white">
        <div className="flex items-center justify-center my-6">
          <div className="border border-blue-700 rounded-full p-2">
            <img src={avatar} width={40} height={40} />
          </div>
          <div className="ml-4 ">
            <h3 className="text-[16px]">Tutorials Dev</h3>
            <p className="text-sm font-light">My Account</p>
          </div>
        </div>
        <hr />
        <div className="ml-14 mt-8 h-[70vh] overflow-y-scroll scroll-container">
          <div className="text-blue-700 text-lg">Messages</div>
          <div>
            {contact.map((item, index) => {
              return (
                <div
                  className="flex items-center py-4 border-b border-b-gray-600"
                  key={index}
                >
                  <div>
                    <img src={item.img} width={50} height={50} />
                  </div>
                  <div className="ml-6">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm font-light">{item.status}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[50%] h-screen bg-white flex flex-col items-center">
        <div className="w-[75%] bg-slate-300 h-[50px] mt-8 rounded-full flex items-center px-14 shadow-md">
          <div className="cursor-pointer">
            <img src={avatar} width={40} height={40} />
          </div>
          <div className="ml-4 mr-auto">
            <h3 className="text-lg ">Alexander</h3>
            <p className="text-sm font-light text-gray-600">online</p>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-phone-outgoing"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2c-8.072 -.49 -14.51 -6.928 -15 -15a2 2 0 0 1 2 -2" />
              <path d="M15 5h6" />
              <path d="M18.5 7.5l2.5 -2.5l-2.5 -2.5" />
            </svg>
          </div>
        </div>
        <div className="h-[75%] w-full  overflow-y-scroll scroll-container shadow-sm">
          <div className=" p-14">
            <div className="max-w-[40%] text-sm bg-slate-100 rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </div>
            <div className="max-w-[40%] text-sm bg-blue-600 rounded-b-xl rounded-tr-xl  ml-auto p-4 text-white mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </div>
            <div className="max-w-[40%] text-sm bg-slate-100 rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </div>
            <div className="max-w-[40%] text-sm bg-blue-600 rounded-b-xl rounded-tr-xl  ml-auto p-4 text-white mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </div>
            <div className="max-w-[40%] text-sm bg-slate-100 rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </div>
            <div className="max-w-[40%] text-sm bg-blue-600 rounded-b-xl rounded-tr-xl  ml-auto p-4 text-white mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </div>
            <div className="max-w-[40%] text-sm bg-slate-100 rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </div>
            <div className="max-w-[40%] text-sm bg-blue-600 rounded-b-xl rounded-tr-xl  ml-auto p-4 text-white mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </div>
          </div>
        </div>
        <div className="p-14 w-full flex items-center">
          <Input
            placeholder="type a message.... "
            className="w-[75%] "
            inputClassName="p-2 px-4 border-0 shadow-lg rounded-full bg-light-gray-100 focus:border-0 focus:ring-0 outline-none"
          />
          <div className="ml-4 p-4 cursor-pointer bg-white rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-send"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 14l11 -11" />
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
            </svg>
          </div>
          <div className="ml-4 p-4 cursor-pointer bg-white rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-plus"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 5l0 14" />
              <path d="M5 12l14 0" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[25%]  h-screen"></div>
    </div>
  );
};

export default Dashboard;
