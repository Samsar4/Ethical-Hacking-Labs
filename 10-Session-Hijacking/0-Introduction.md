# Session Hijacking
The Session Hijacking attack consists of the exploitation of the web session control mechanism, which is normally managed for a session token.

<p align="center">
  <img width="50%" src="https://www.greycampus.com/ckeditor_assets/pictures/231/content_ses.hij.intro.bmp" />
</p>

Because http communication uses many different TCP connections, the web server needs a method to recognize every user’s connections. The most useful method depends on a token that the Web Server sends to the client browser after a successful client authentication. A session token is normally composed of a string of variable width and it could be used in different ways, like in the URL, in the header of the http requisition as a cookie, in other parts of the header of the http request, or yet in the body of the http requisition.

The Session Hijacking attack compromises the session token by stealing or predicting a valid session token to gain unauthorized access to the Web Server.

The session token could be compromised in different ways; the most common are:

* Predictable session token
* Session Sniffing
* Client-side attacks (XSS, malicious JavaScript Codes, Trojans, etc)
* Man-in-the-middle attack
* Man-in-the-browser attack

Source: https://owasp.org/www-community/attacks/Session_hijacking_attack