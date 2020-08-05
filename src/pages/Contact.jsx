import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <main class="container py-3 mt-3">
        <header class="row">
          <header class="col">
            <h1 class="ml-3">Contact</h1>

            <hr />
          </header>
        </header>

        <section class="row">
          <section class="col">
            <form>
              <article class="form-group">
                <label>Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="John Smith"
                />
              </article>
              <article class="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Email@gmail.com"
                />
              </article>
              <article class="form-group">
                <label>Message</label>
                <textarea class="form-control" rows="3"></textarea>
              </article>
            </form>
          </section>
        </section>
      </main>
    );
  }
}

export default Contact;
