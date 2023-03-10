const FAQ = () => {
  return (
    <div className="FAQsection">
      <h1 className="appt">Find Answers to your Questions Here!</h1>
      <h3 className="appt">"How do I use this page?"</h3>
      <p className="whoo">
        It's easy! After you sign in, use the links on the top of the page to
        navigate through the site. Your patient profile will include your
        personal information and your upcoming appointments.
      </p>
      <h3 className="appt">"How do I make an appointment?"</h3>
      <p className="whoo">
        To make an appointment, select a doctor from the "Find a Doctor" page.
        Each doctor's profile includes a link that will direct you do an
        appointment request form. Fill it out, click submit, and your new
        appointment will appear on your patient profile!
      </p>
      <h3 className="appt">
        "What if I need to cancel or update an appointment?"
      </h3>
      <p className="whoo">
        On your profile page, each upcoming appointment card should have a link
        that will allow you to either cancel or update each appointment. When
        updating, make sure to fill out each form field before submitting. When
        cancelling, hit refresh on the page, and your appointment should be
        gone.
      </p>
      <h3 className="appt">"How much does this website cost?"</h3>
      <p className="whoo">
        It's free! Use this website at your hearts content. The appointment
        itself however might be a different story.
      </p>
    </div>
  )
}

export default FAQ
