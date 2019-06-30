import React, { Component } from 'react';

import './Content.css';

export default class Content extends Component {

  homeView = () => {
    return (
      <>
        <h1>HOME</h1>
      </>
    );
  }

  aboutView = () => {
    return (
      <div className="content-tab-container">
        <p>Hi, I'm Tim, here's my condensed life story:</p>
        <br />

        <p>I grew up in <a href="https://www.google.com/search?q=skipton+victoria+australia" target="_blank"
          class="hyp-link" rel="noopener noreferrer">Skipton</a>. Haven’t heard of it? That’s probably because it’s a small town in country
          Victoria, Australia. 600 people small.</p>
        <br />

        <p>I didn’t want to be a mechanic like everyone else in my family, neither did Mum & Dad (thanks for that
          guys!). But there isn't that much diversity activities available in a small country town, especially at a
          young age, so I stayed inside, played <a href="https://oldschool.runescape.wiki/w/Old_School_RuneScape"
            target="_blank" rel="noopener noreferrer" class="hyp-link">RuneScape</a>, and tinkered with and broke our computer</p>
            <br />

        <p>At the start of high school around age 12 (which I attended in Beaufort, another small town) I was
          introduced into RuneScape Private Servers. As a by-product of my boredom and an inquisitive nature I learned
          these servers were developed using Java, and being an open source community I was able to download, compile
          and run my own local versions. Slowly by copy, pasting and replacing I was introduced into programming.
          After playing around with a few different languages and grasping the fundamentals I stumbled across the
          perfect cross-over of passion and pleasure; <strong><a
              href="https://en.wikipedia.org/wiki/Call_of_Duty:_Modern_Warfare_2" class="hyp-link"
              target="_blank" rel="noopener noreferrer">Call of Duty: Modern Warfare 2</a></strong>. I found myself involved in a community of
          people dedicated to deobfuscating, modifying then recompiling the game's code to develop our own extensions
          and creations. One modification I was developing conjured up quite a following which lead me to start
          dedicating more and more energy into it as what I was doing quickly evolved from a hobby into what I refer
          to today as my passion. My final year at high school was a bit of a struggle as I spending more energy on
          programming than my actual studies, but I was able to complete the year and receive my VCE (Victorian
          Certificate of Education).</p>
      </div>
    );
  }

  projectsView = () => {
    return (
      <>
        <h1>PROJECTS</h1>
      </>
    );
  }

  contactView = () => {
    return (
      <>
        <h1>CONTACT</h1>
      </>
    );
  }

  deliverView = () => {
    const { selectedView } = this.props;

    switch(selectedView) {
      case "about":
        return this.aboutView();

      case "projects":
        return this.projectsView();

      case "contact":
        return this.contactView();
        
      case "home":
      default:
        return this.homeView();
    }
  }

  render = () => {
    console.log("Content props:", this.props);
    const htmlToRender = this.deliverView();

    return (
      <div className="content-container">
        {htmlToRender}
      </div>
    );
  }
}