import { useContext } from "react";
import { NextPage } from "next";
import Link from "next/link";
import nextCookie from "next-cookies";

import { AuthContext } from "../context/AuthenticationContext";

import useAuth from "../components/hooks/useAuth";
import Layout from "../components/Layout/Layout";
import FloatingActionButton from "../components/FloatingActionButton";
import Loading from "../components/Loading";

import PlusIcon from "../icons/PlusIcon";
import BookIcon from "../icons/BookIcon";
import ClickIcon from "../icons/ClickIcon";
import ArrowupIcon from "../icons/ArrowupIcon";

const Dashboard: NextPage = ({ token }: any) => {
  useAuth({ token });

  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Layout>
      <Link href="/create">
        <a href="">
          <FloatingActionButton />
        </a>
      </Link>
      <div className="flex items-center justify-between mt-5">
        <p className="text-2xl font-bold text-white">Dashboard</p>
        <div className="flex items-center">
          <div className="text-white">Good morning Victor!</div>
          <span className="inline-flex mx-5">
            <Link href="/create">
              <a className="inline-flex items-center px-2 py-2 text-sm font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-primary hover:bg-yellow-600 focus:outline-none focus:border-yellow-700 focus:shadow-outline-blue active:bg-yellow-800">
                <div className="w-4 h-4 mr-2 text-white">
                  <PlusIcon />
                </div>
                Create Form
              </a>
            </Link>
          </span>
        </div>
      </div>
      <div className="mt-10">
        <div className="w-full px-5 py-10 shadow-xl px-7 md:w-3/4">
          <div className="flex items-baseline text-white">
            <p className="text-4xl font-bold font-white">3,000</p>
            <p className="ml-2 text-lg">responses this week</p>
          </div>
          <div className="flex mt-5">
            <div className="flex w-1/3 h-16">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-purple-200 rounded-full">
                <div className="w-6 h-6 text-purple-800">
                  <BookIcon />
                </div>
              </div>
              <div className="ml-2 text-white">
                <p className="text-xl">15</p>
                <p className="text-gray-400">total forms</p>
              </div>
            </div>
            <div className="flex w-1/3 h-16">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full">
                <div className="w-6 h-6 text-yellow-800 ">
                  <ArrowupIcon />
                </div>
              </div>
              <div className="ml-2 text-white">
                <p className="text-xl">5000</p>
                <p className="text-gray-400">total responses</p>
              </div>
            </div>
            <div className="flex w-1/3 h-16">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-green-200 rounded-full">
                <div className="w-6 h-6 text-green-800">
                  <ClickIcon />
                </div>
              </div>
              <div className="ml-2 text-white">
                <p className="text-xl">4</p>
                <p className="text-gray-400">active forms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-2xl font-bold text-white">Recent Activity</h1>
      </div>
      <div>{!isAuthenticated && <Loading />}</div>
    </Layout>
  );
};

Dashboard.getInitialProps = async (ctx) => {
  const { token } = nextCookie(ctx);

  return { token };
};

export default Dashboard;
