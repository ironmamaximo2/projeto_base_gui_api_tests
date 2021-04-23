# WARNING: this file was autogenerated by generate-included-image.js
# using
#   npm run add:included -- 6.4.0 cypress/browsers:node12.18.3-chrome87-ff82
#
# build this image with command
#   docker build -t cypress/included:6.4.0 .
#
FROM cypress/base:14.16.0

# avoid too many progress messages
# https://github.com/cypress-io/cypress/issues/1243
ENV CI=1

# disable shared memory X11 affecting Cypress v4 and Chrome
# https://github.com/cypress-io/cypress-docker-images/issues/270
ENV QT_X11_NO_MITSHM=1
ENV _X11_NO_MITSHM=1
ENV _MITSHM=0

# command "id" should print:
# uid=0(root) gid=0(root) groups=0(root)
# which means the current user is root
RUN id
RUN echo "whoami: $(whoami)"

# always grab the latest NPM and Yarn
# otherwise the base image might have old versions
RUN apt-get install -y nodejs

RUN npm i -g npm@latest
# should be root user
RUN echo "whoami: $(whoami)"
RUN npm config -g set user $(whoami)

RUN npm install --save-dev cypress
RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run


# point Cypress at the /root/cache no matter what user account is used
# see https://on.cypress.io/caching
ENV CYPRESS_CACHE_FOLDER=/root/.cache/Cypress


# Cypress cache and installed version
# should be in the root user's home folder
RUN cypress cache path
RUN cypress cache list
RUN cypress info
RUN cypress version

# give every user read access to the "/root" folder where the binary is cached
# we really only need to worry about the top folder, fortunately
RUN ls -la /root
RUN chmod 755 /root
RUN sed -i -e 's|api_url:.*$|api_url: "https://sorry-cypress-demo-director.herokuapp.com/"|g' /*/.cache/Cypress/*/Cypress/resources/app/packages/server/config/app.yml

# always grab the latest NPM and Yarn
# otherwise the base image might have old versions

# should print Cypress version
# plus Electron and bundled Node versions

RUN sed -i -e 's|api_url:.*$|api_url: "https://sorry-cypress-demo-director.herokuapp.com/"|g' /*/.cache/Cypress/*/Cypress/resources/app/packages/server/config/app.yml
#RUN echo  " node version:    $(node -v) \n" \
#  "npm version:     $(npm -v) \n" \
#  "yarn version:    $(yarn -v) \n" \
#  "debian version:  $(cat /etc/debian_version) \n" \
#  "user:            $(whoami) \n" \
#  "chrome:          $(google-chrome --version || true) \n" \
#  "firefox:         $(firefox --version || true) \n"

#ENTRYPOINT ["cypress", "run"]

#RUN apt-get install xvfb

WORKDIR /home/projeto_base_gui_api_tests/

COPY . /home/projeto_base_gui_api_tests/

RUN CI=true npm i





