//our-domain.com/
import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://images.unsplash.com/photo-1608579688823-f3d2fbe7d337?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    address: "Forest, World",
    description: "This is the first Meetups",
  },
  {
    id: "m2",
    title: "The Second Meetup",
    image:
      "https://plus.unsplash.com/premium_photo-1674729244190-05be79f3aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcHVsYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    address: "Some address, 88744 Some City ",
    description: "This is the Second Meetups",
  },
  {
    id: "m3",
    title: "The Third Meetup",
    image:
      "https://plus.unsplash.com/premium_photo-1668181103252-352173f7ada7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBvcHVsYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    address: "California, USA ",
    description: "This is the Third Meetups",
  },
  {
    id: "m4",
    title: "The fourth Meetup",
    image:
      "https://images.unsplash.com/photo-1571631723035-aeea2d40cab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBvcHVsYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    address: "Beijing China",
    description: "This is the Fourth Meetups",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps(context) {
//   // no need to revalidate this function
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
