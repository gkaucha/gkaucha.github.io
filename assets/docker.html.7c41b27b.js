import{_ as e,o as a,c as i,a as r}from"./app.7c967e04.js";const t={},n=r(`<h1 id="fundamentals-of-docker" tabindex="-1"><a class="header-anchor" href="#fundamentals-of-docker" aria-hidden="true">#</a> Fundamentals of Docker</h1><p>Docker is a PaaS product that uses OS level virtualization to deliver software in packages called containers. It is also a social platform for us to find and share the containers which are different from virtual machines.</p><ul><li><a href="#section-1">Docker and Container?</a></li><li><a href="#section-2">Using Docker</a></li><li><a href="#section-3">Building Docker Images</a></li><li><a href="#section-4">Under the hood</a></li><li><a href="#section-5">Orchestration: Building Systems with Docker</a></li><li><a href="#section-6">What&#39;s next?</a></li></ul><h2 id="_1-what-is-docker" tabindex="-1"><a class="header-anchor" href="#_1-what-is-docker" aria-hidden="true">#</a> 1. What is Docker?</h2><ul><li>A client program name Docker.</li><li>A server program that manages a linux system.</li><li>A program that builds containers from code.</li><li>A service that distributes containers.</li><li>A company that does all of above.</li></ul><h4 id="what-is-a-container" tabindex="-1"><a class="header-anchor" href="#what-is-a-container" aria-hidden="true">#</a> What is a Container?</h4><p>A container is a self-contained sealed unit of software. It contains codes, configs, processess, networking, dependencies and operating system.</p><h4 id="confirm-docker-installation" tabindex="-1"><a class="header-anchor" href="#confirm-docker-installation" aria-hidden="true">#</a> Confirm Docker installation</h4><pre>$ docker
$ docker info
</pre><h2 id="_2-using-docker" tabindex="-1"><a class="header-anchor" href="#_2-using-docker" aria-hidden="true">#</a> 2. Using Docker</h2><h4 id="docker-flow-images-to-containers" tabindex="-1"><a class="header-anchor" href="#docker-flow-images-to-containers" aria-hidden="true">#</a> Docker Flow : Images to containers</h4><pre>$ docker images                               // list all the docker images
$ docker run -ti ubuntu:latest bash           // takes image and creates a running container containing ubuntu
  # ls
  # cat /etc/lsb-release
  # exit
$ docker ps --format=$FORMAT                  // list running docker images in vertical format
</pre><ul><li>Images are the fixed points.</li><li><em>docker run</em> creates a running container. When we exit the container, it&#39;s still there in the stopped containers.</li><li>to see all the containers : $ docker ps -a</li><li>to see the last stopped container : $ docker ps -l --format=$FORMAT</li></ul><h4 id="docker-flow-containers-to-images" tabindex="-1"><a class="header-anchor" href="#docker-flow-containers-to-images" aria-hidden="true">#</a> Docker Flow : Containers to Images</h4><p>Container ID and Image ID are different.</p><pre>$ docker run -ti ubuntu bash                       // creates a new running container containing latest ubuntu
$ touch Hello-World-File                          // create a new file in container
$ exit                                            // exit the container
$ docker ps -l --format=$FORMAT                   // look most recently exited container
$ docker commit [container ID]                    // makes the image out of the container id and prints image ID
$ docker tag [ImageID] [image-name-1]                 // creates repository (image) name tag
$ docker images                                   // list all the docker images
$ docker run -ti [image-name] bash                // runs the image and confirm the file we created earlier
$ docker commit [Container NAMES] [image-name-2]  // creates image name from container name escaping tag
$ docker images
</pre><h4 id="run-processes-in-containers" tabindex="-1"><a class="header-anchor" href="#run-processes-in-containers" aria-hidden="true">#</a> Run processes in containers</h4><pre>$ docker run --rm  -ti ubuntu sleep 5      // starts a container, sleeps for 5, exits and gets deleted
$ docker run -ti ubuntu bash -c &quot;sleep 3; echo all done&quot;     // first starts container process and sleeps for 3 seconds and then echoes

$ docker run -d -ti ubuntu bash     // starts docker as detached
$ docker attach [container NAMES]   // takes back to the specified container
$ docker ps                        // list docker processes
</pre><p>Also we can detach from running container using : Ctrl-p Ctrl-q</p><h5 id="running-more-things-in-container" tabindex="-1"><a class="header-anchor" href="#running-more-things-in-container" aria-hidden="true">#</a> Running more things in container</h5><pre>$ docker exec -ti [container NAMES] bash                  // starts  process called bash in an existing container
</pre><h3 id="manage-containers" tabindex="-1"><a class="header-anchor" href="#manage-containers" aria-hidden="true">#</a> Manage Containers</h3><h4 id="logs" tabindex="-1"><a class="header-anchor" href="#logs" aria-hidden="true">#</a> Logs</h4><pre>$ docker run --name example -d ubuntu bash -c &quot;lose /etc/password&quot;   // creates &quot;example&quot; container and tries to execute command
$ docker logs example                                                //prints the logs of example container
</pre><h3 id="stopping-and-removing-containers" tabindex="-1"><a class="header-anchor" href="#stopping-and-removing-containers" aria-hidden="true">#</a> Stopping and Removing Containers</h3><pre>$ docker kill [container_name]        // kills container to make them stopped
$ docker rm [container_name]          // explicity removes stopped container
</pre><h3 id="resource-constraints" tabindex="-1"><a class="header-anchor" href="#resource-constraints" aria-hidden="true">#</a> Resource Constraints</h3><pre>$ docker run --memory maximum-allowed-memory image-name command  // sets memory limit

$ docker run --cpu-shares           // CPU limits related to other containers
$ docker run --cpu-quota          //  CPU limit in general

</pre><h3 id="note" tabindex="-1"><a class="header-anchor" href="#note" aria-hidden="true">#</a> Note</h3><ol><li>Don&#39;t let containers fetch dependencies when they start.</li><li>Don&#39;t leave important things in unnamed stopped containers.</li></ol><h3 id="container-networking" tabindex="-1"><a class="header-anchor" href="#container-networking" aria-hidden="true">#</a> Container Networking</h3><ul><li>Programs is containers are isolated from the internet by default.</li><li>Containers can be grouped into &quot;private&quot; networks.</li><li>Who can connect to whom can be explicitly choosen.</li><li>Expose ports to let connections in</li><li>Private networks to connect between containers.</li></ul><h4 id="exposing-a-specific-port" tabindex="-1"><a class="header-anchor" href="#exposing-a-specific-port" aria-hidden="true">#</a> Exposing a Specific Port</h4><ul><li>Explicitly specifies the port inside the container and outside</li></ul><pre>$ docker run --rm -ti -p 45678:45678 -p 45679:45679 --name echo-server ubuntu:14.01 bash      // publish the internal and external ports
root@98daf45435:/# nc -lp 45678 | nc -lp 45679   // netcat is a network degugging program / sends bits from 45678 port 45679 port

$ docker run --rm -ti ubuntu:14:14.04 bash   // start docker in a separate terminal
root@574daad335:/# nc host.docker.internal 45678                  // start the host server

$ docker run --rm -ti ubuntu:14.04 bash     // start container in separate terminal
root@72345afda:/# nc host.docker.internal 45679     start the server

// After the host containers are running, test the network with text.
</pre><h4 id="exposing-ports-dynamically" tabindex="-1"><a class="header-anchor" href="#exposing-ports-dynamically" aria-hidden="true">#</a> Exposing Ports Dynamically</h4><ul><li>The port inside the container is fixed</li><li>The port on the host is chosen form the unused ports.</li><li>This allows many container running programs with fixed ports</li><li>This is often used with discovery service program</li></ul><pre>$ docker run --rm -ti -p 45678 -p 45679 --name echo-server ubuntu:14.04 bash                    // only sepecified the interanal port of the container
root@237562daf34:/# nc -lp 45678 | nc -lp 45679

// on a separate terminal
$ docker port echo-server        // lists the external port of the container
</pre><pre>$ docker run -p outside-port:inside-port/protocol (tcp/udp)
$ docker run -p 1234:1234/udp

$ docker run --rm -ti p 45678/udp --name echo-server ubuntu:14.04 bash
root@45sf542d:/# nc -ulp 45678

$ docker port echo-server            // list the ports associated
$ nc -u localhost [port number]
hello world!
</pre><h4 id="connecting-between-containers" tabindex="-1"><a class="header-anchor" href="#connecting-between-containers" aria-hidden="true">#</a> Connecting between Containers</h4><h5 id="connecting-directly-between-containers" tabindex="-1"><a class="header-anchor" href="#connecting-directly-between-containers" aria-hidden="true">#</a> Connecting directly between containers</h5><pre>$ docker network ls            // lists default networks

$ docker network create learning    // creates a network nacmed learning

$ docker run --rm -ti --net learning --name appleserver ubuntu:14.04 bash  // starts the catserver on the learning network
root@542dfa345:/# ping appleserver

$ docker run --rm -ti --net learning --name bananaserver ubuntu:14.04 bash
root@5869daf45:/# ping bananaserver
root@5869daf45:/# ping appleserver
root@5869daf45:/# nc -lp 1234            // start host server at 1234, there will be communication between the apple and banana server

$ docker network create applesonly    // creates &quot;applesonly&quot; network
$ docker network connect  applesonly appleserver   // connects appleserver to applesonly network
</pre><h4 id="legacy-linking" tabindex="-1"><a class="header-anchor" href="#legacy-linking" aria-hidden="true">#</a> Legacy linking</h4><ul><li>links all port, through only one way</li><li>secret env. variables are shared only one way</li><li>depends on startup order</li><li>restarts only sometimes breaks the links</li></ul><pre>$ docker run --rm -ti -e SECRET=theinternetlovescat --name catserver ubuntu:14.04 bash
root@544dfa5jjk4:/# nc -lp 1234

$ docker run --rm -ti --link catserver --name dogserver ubuntu:14.04 bash
root@dafdaf45jkdf:/# nc catserver 1234

// &gt;&gt; there will be communication to and from cat and dog server, however
// &gt;&gt; if we start the nc on dogserver , we cannot communicate
// &gt;&gt; because dogserver copies envvaribales from catserver but cat server doesn&#39;t
</pre><h4 id="listing-images" tabindex="-1"><a class="header-anchor" href="#listing-images" aria-hidden="true">#</a> Listing Images</h4><p>Name Structure of images:</p><pre>$ docker images                                 // list images
$ docker commit [container id] [image name]        // tags the container
$ docker commit [container id] [image name]:v2.1   // creates different version

// &gt;&gt;  tagging name structure : registry.example.com:port/organization/image-name:version-tag

$ docker pull              // pulls docker images
$ docker run              // automatically runs  docker pull
$ docker push             // opposite of docker pull

$ docker rmi image-name:tag
$ docker rmi image-name
</pre><h4 id="volumes" tabindex="-1"><a class="header-anchor" href="#volumes" aria-hidden="true">#</a> Volumes</h4><ul><li>Virtual &quot;discs&quot; to store and share data</li><li>Two main varieties : Persistent &amp; Ephemeral</li><li>Not part of images</li></ul><h5 id="sharing-data-with-the-host" tabindex="-1"><a class="header-anchor" href="#sharing-data-with-the-host" aria-hidden="true">#</a> Sharing data with the host</h5><ul><li>&quot;Shared folders&quot; with the host</li><li>Sharing a &quot;single file&quot; into a container</li></ul><pre>$ mkdir example
$ docker run -ti -v /patht/to/example/folder:/shared-folder ubuntu bash
root@45fd35fad:/# ls /shared-folder/
root@45fd35fad:/# touch /shared-folder/my-data
root@45fd35fad:/# exit
$ ls exmaple/                          // my-data file will persit even after the conainer exited

$ docker run -ti -v /shared-data ubuntu bash
root@fdsa45235:/# echo hello &gt; /shared-data/data-file

$ docker run -ti --volumes-from [containername] ubuntu bash
root@fdgjlkj4545:/#ls /shared-data/data-file

</pre><h4 id="docker-registries" tabindex="-1"><a class="header-anchor" href="#docker-registries" aria-hidden="true">#</a> Docker Registries</h4><ul><li>software that manages and distribute images</li><li>Docker(the company) offers for free</li></ul><pre>$ docker search ubuntu
</pre><h2 id="_3-building-docker-images" tabindex="-1"><a class="header-anchor" href="#_3-building-docker-images" aria-hidden="true">#</a> 3. Building Docker Images</h2><h3 id="what-is-dockerfile" tabindex="-1"><a class="header-anchor" href="#what-is-dockerfile" aria-hidden="true">#</a> What is DockerFile?</h3><ul><li>a small &quot;program&quot; to create an image</li><li>it can be run with</li></ul><pre>docker build -t name-of-result . </pre><ul><li>the result will be in local docker register.</li></ul><h4 id="producing-next-image-with-each-step" tabindex="-1"><a class="header-anchor" href="#producing-next-image-with-each-step" aria-hidden="true">#</a> Producing next image with each step</h4><ul><li>Each line takes the image from the previous line and makes another image</li><li>Previous image is unchanged</li><li>It does not edit the state from the previous line</li><li>You don&#39;t want large files to span lines or your image will be huge</li></ul><h3 id="caching-with-each-step" tabindex="-1"><a class="header-anchor" href="#caching-with-each-step" aria-hidden="true">#</a> Caching with each step</h3><ul><li>This is important; watch the build output for &quot;using cache&quot;</li><li>Docker skips lines that have not changed since the last build</li><li>If your first line is &quot;download latest file&quot;, it may not always run</li><li>This caching saves huge amounts of time</li><li>The parts that change the must belong at the end of the Dockerfile</li></ul><h3 id="not-shell-scripts" tabindex="-1"><a class="header-anchor" href="#not-shell-scripts" aria-hidden="true">#</a> Not Shell Scripts</h3><ul><li>Dockerfiles look like shell scripts but they are not shell scripts</li><li>Processes you start on one line will not be running on the next line</li><li>Environment variables persit on the next line. If you use ENV command, <strong>remember that each line is its own call to docker run</strong></li></ul><h3 id="building-docker-file" tabindex="-1"><a class="header-anchor" href="#building-docker-file" aria-hidden="true">#</a> Building Docker File</h3><h4 id="the-most-basic-dockerfile" tabindex="-1"><a class="header-anchor" href="#the-most-basic-dockerfile" aria-hidden="true">#</a> The most Basic Dockerfile</h4><ul><li>Make a file named Dockerfile with following contents:</li></ul><pre>FROM busybox
RUN echo &quot;building simple docker image.&quot;
CMD echo &quot;Hello Container&quot;
</pre><ul><li>create Docker image : $ docker build -t hello .</li><li>test if the container works : docker run --rm hello</li></ul><h4 id="installing-a-program-with-docker-build" tabindex="-1"><a class="header-anchor" href="#installing-a-program-with-docker-build" aria-hidden="true">#</a> Installing a Program with Docker Build</h4><ul><li>Create a Dockerfile with following contents:</li></ul><pre>FROM debian:sid
RUN apt-get -y update
RUN apt-get -y install nano
CMD [&quot;/bin/nano&quot;,&quot;/tmp/notes&quot;]
</pre><ul><li>build docker image: $ docker build -t example/nanoer .</li><li>run image : $ docker run --rm -ti example/nanoer</li></ul><h4 id="adding-a-file-through-docker-build" tabindex="-1"><a class="header-anchor" href="#adding-a-file-through-docker-build" aria-hidden="true">#</a> Adding a File through Docker Build</h4><ul><li>Add the following in the DockerFile</li></ul><pre>FROM example/nanoer
ADD notes.txt /notes.txt
CMD[&quot;/bin/nano&quot;,&quot;notes.txt&quot;]
</pre><ul><li>$ docker build -t example/notes .</li><li>$ docker run -ti --rm example/notes</li></ul><h3 id="dockerfile-syntax" tabindex="-1"><a class="header-anchor" href="#dockerfile-syntax" aria-hidden="true">#</a> DockerFile Syntax</h3><ol><li><p>FROM</p><ol><li>which image to download and start from</li><li>must be the first command</li></ol></li><li><p>MAINTAINER</p><ol><li>author of this dockerfile</li><li>MAINTAINER Firstname Lastname email@example.com</li></ol></li><li><p>RUN</p><ol><li>runs the command line, waits for it to finish, and saves the result.</li></ol></li><li><p>ADD</p><ol><li>adds local files : Add run.sh /run.sh</li><li>adds the contents of tar archices : ADD project.tar.gz /install/</li><li>works with URLs : ADD https://abc.example.com/download/1.0/project.rum/project/</li></ol></li><li><p>ENV</p><ol><li>Sets env. varibales</li><li>during the build and when running the result : ENV DB_HOST=db.production.example.com</li></ol></li><li><p>ENTRYPOINT and CMD</p><ol><li>ENTRYPOINT specifies the start of the command to run</li><li>CMD specifies the whole command to run</li><li>CMD sets the program to run when the container starts.</li></ol></li><li><p>EXPOSE</p><ol><li>maps a port into the container : EXPOSE 8080</li></ol></li><li><p>VOLUME</p><ol><li>defines shared or ephemeral volumes : VOLUME [&quot;/host/pasth/&quot; &quot;/container/path/&quot;] VOLUME [&quot;/shared-data&quot;]</li><li>avoid defining shared folders in Dockerfiles</li></ol></li><li><p>WORKDIR</p><ol><li>Sets the directory the container starts in : WORKDIR /test/</li><li>changes directories both for the rest of the Docker file, and in the finished image</li></ol></li><li><p>USER : sets which user the container will run as : USER arthur , USER 1000</p></li></ol><h3 id="multi-project-docker-file" tabindex="-1"><a class="header-anchor" href="#multi-project-docker-file" aria-hidden="true">#</a> Multi-project Docker File</h3><ol><li>Create the docker file with following contents and build image.</li></ol><pre>FROM ubuntu:16.04
RUN apt-get update
RUN apt-get -y install curl
RUN curl https://google.com | wc -c &gt; google-size
ENTRYPOINT echo google is this big; cat google-size
</pre><ol start="2"><li>Split the docker file into 2 parts which reduces drastically the image size</li></ol><pre>FROM ubuntu:16.04 as builder
RUN apt-get update
RUN apt-get -y install curl
RUN curl https://google.com | wc -c &gt; google-size

FROM alpine
COPY --from=builder /google-size /google-size
ENTRYPOINT echo google is this big; cat google-size
</pre><h3 id="avoid-golden-images" tabindex="-1"><a class="header-anchor" href="#avoid-golden-images" aria-hidden="true">#</a> Avoid golden images</h3><h4 id="prevent-the-golden-image-problem" tabindex="-1"><a class="header-anchor" href="#prevent-the-golden-image-problem" aria-hidden="true">#</a> Prevent the golden image problem</h4><ul><li>Install installers in your project</li><li>Have a canonical build that builds everything completely from the scratch.</li><li>Tag your builds with the git hash of the code that built it</li><li>Use small base images, such as Alpine</li><li>Build images you share publicly from Dockerfiles, always</li><li>Dont Leave Password in the deep layer.</li></ul><h3 id="note-1" tabindex="-1"><a class="header-anchor" href="#note-1" aria-hidden="true">#</a> Note</h3><p>Include the parts of the code that you have changed the most at the end of your Dockerfile, so the parts before them do not need to be redone every time you change that part.</p><h3 id="note-2" tabindex="-1"><a class="header-anchor" href="#note-2" aria-hidden="true">#</a> Note</h3><p>The <code>FROM</code> statement must be the first line in a Dockerfile, and specifies the image to download and start with.</p><h2 id="_4-under-the-hood" tabindex="-1"><a class="header-anchor" href="#_4-under-the-hood" aria-hidden="true">#</a> 4. Under the hood</h2><h3 id="what-kernels-do" tabindex="-1"><a class="header-anchor" href="#what-kernels-do" aria-hidden="true">#</a> What Kernels Do?</h3><ul><li>Respond to messages from the hardware</li><li>Start and schedule programs</li><li>Control and organize storage</li><li>Pass messages between programs</li><li>Allocates resources, memory, CPU, network and so on</li><li>Create containers by Docker configuring the kernel</li></ul><h3 id="what-docker-does" tabindex="-1"><a class="header-anchor" href="#what-docker-does" aria-hidden="true">#</a> What Docker Does?</h3><ul><li>Program written in Go - an upcoming systems language</li><li>Manage kernel Features Uses &quot;cgroups&quot; to contain processes Uses &quot;namespaces&quot; to contain networks Uses &quot;copy-on-write&quot; filesystems to build images</li><li>Used for years before Docker</li></ul><h3 id="what-docker-really-does" tabindex="-1"><a class="header-anchor" href="#what-docker-really-does" aria-hidden="true">#</a> What Docker Really Does?</h3><ul><li>Makes scripting distributed systems &quot;easy&quot;</li></ul><h3 id="the-docker-control-socket" tabindex="-1"><a class="header-anchor" href="#the-docker-control-socket" aria-hidden="true">#</a> The Docker Control Socket</h3><ul><li>Docker is two programs: a client and a server</li><li>The server receives commands over a socket (either over a network or through a &quot;file&quot;)</li><li>The client can even run inside docker itself.</li></ul><h3 id="networking-and-namespaces" tabindex="-1"><a class="header-anchor" href="#networking-and-namespaces" aria-hidden="true">#</a> Networking and namespaces</h3><h4 id="networking-in-brief" tabindex="-1"><a class="header-anchor" href="#networking-in-brief" aria-hidden="true">#</a> Networking in Brief</h4><ul><li>Ethernet: moves &quot;frames&quot; on a wire (or Wi-Fi)</li><li>IP Layer : move packets on a local network</li><li>Routing : forwads packets between networks</li><li>Ports : addresses particular programs on a computer</li></ul><h4 id="bridging" tabindex="-1"><a class="header-anchor" href="#bridging" aria-hidden="true">#</a> Bridging</h4><ul><li>Docker uses bridges to create virtual networks in your computer</li><li>These are software switches</li><li>They control the Ethernet Layer</li><li>You can turn off this protection with<pre>$ docker run --net=host options image-name command</pre></li></ul><h3 id="routing" tabindex="-1"><a class="header-anchor" href="#routing" aria-hidden="true">#</a> Routing</h3><ul><li>creates &quot;firewall&quot; rules to move packets between networks</li><li>NAT (Network Address Translation)</li><li>Change the source address on the way out</li><li>Change the destination address on the way back in</li><li>&quot;Exposing&quot; a port is really &quot;port forwarding&quot;</li></ul><pre>$ docker run -ti --rm --net=host --privileged=true ubuntu bash
root@efjas544:/# apt-get update &amp;&amp; apt-get install iptables
root@efjas544:/# iptables -n -L -t nat

// start next container
$ docker run -ti --rm -p 8080:8080 ubuntu bash

//run the iptables in previous container.
root@efjas544:/# iptables -n -L -t nat
</pre><h3 id="namespacees" tabindex="-1"><a class="header-anchor" href="#namespacees" aria-hidden="true">#</a> Namespacees</h3><ul><li>They allow processes to be attached to private network segments</li><li>These private networks are bridged into a shared network with the rest of the containers</li><li>Containers have virtual network &quot;cards&quot;</li><li>Containers get their own copy of the networking stack</li></ul><h3 id="processes-and-cgroups" tabindex="-1"><a class="header-anchor" href="#processes-and-cgroups" aria-hidden="true">#</a> Processes and cgroups</h3><h4 id="primer-on-linux-processes" tabindex="-1"><a class="header-anchor" href="#primer-on-linux-processes" aria-hidden="true">#</a> Primer on Linux Processes</h4><ul><li><p>Processes come from othe processes -- parent-chile realtionship</p></li><li><p>When a child process exits, it returns an exit code to its parents</p></li><li><p>Process Zero is special called <em>init</em>, the process that starts the rest</p></li><li><p>In Docker, container starts with an init process and vanishes when that process exits</p></li></ul><pre>$ docker run -ti --rm --name hello ubuntu bash
root@gfg9890:/#

$ docker inspect --format &#39;&#39; hello   // gives out processes id of hello
$ docker run -ti --rm --privileged=true --pid=host ubuntu bash
root@dfaf54546:/# kill [pid]
</pre><h4 id="resource-limiting" tabindex="-1"><a class="header-anchor" href="#resource-limiting" aria-hidden="true">#</a> Resource Limiting</h4><ul><li>Scheduling CPU time</li><li>Memory Allocation limits</li><li>Inherited Limitations and quotas</li><li>Can&#39;t escape limits by stating processes</li></ul><h3 id="storage" tabindex="-1"><a class="header-anchor" href="#storage" aria-hidden="true">#</a> Storage</h3><h4 id="unix-storage-in-brief" tabindex="-1"><a class="header-anchor" href="#unix-storage-in-brief" aria-hidden="true">#</a> Unix Storage in brief</h4><ul><li>Actual storage devices</li><li>Logical storage devices</li><li>Filesystems</li><li>FUSE filesystems and network filesystems</li></ul><h3 id="note-3" tabindex="-1"><a class="header-anchor" href="#note-3" aria-hidden="true">#</a> Note</h3><p>The secret of Docker and all of its images : Copy On Write (COWs)</p><h4 id="moving-cows" tabindex="-1"><a class="header-anchor" href="#moving-cows" aria-hidden="true">#</a> Moving Cows</h4><ul><li>The contents of layers are moved between containers in gzip files.</li><li>Containers are independent of the storage engine</li><li>Any container an be loaded(almost) anywhere</li><li>It is possible to run out of layers on some of the storage engines</li></ul><h4 id="volumes-and-bind-mounting" tabindex="-1"><a class="header-anchor" href="#volumes-and-bind-mounting" aria-hidden="true">#</a> Volumes and Bind Mounting</h4><ul><li>The Linux VFS(Virutal File System)</li><li>Mounting devices on the VFS</li><li>Mounting directories on the VFS</li><li>Getting the mount order correct : The mount order must be correct; in order to mount a folder and then a file within that folder, you have to do it in this specific order.</li><li>Mounting volumes -- always mounts the host&#39;s filesystem over the guest</li></ul><pre>$ docker run -ti --rm --privileged=true ubuntu bash
root@gjsg8787jkj:/# mkdir example
root@gjsg8787jkj:/# cd example
root@gjsg8787jkj:/example# ls
root@gjsg8787jkj:/example# mkdir work
root@gjsg8787jkj:/example/# cd work
root@gjsg8787jkj:/example/work#  touch a b c d e f
root@gjsg8787jkj:/example/work# ls
root@gjsg8787jkj:/example/work# cd ..
root@gjsg8787jkj:/example# mkdir other-work
root@gjsg8787jkj:/example# cd other-work
root@gjsg8787jkj:/example/other-work# touch other-a other-b other-c other-d
root@gjsg8787jkj:/example/other-work# ls
root@gjsg8787jkj:/example/other-work# cd ..
root@gjsg8787jkj:/example# ls -R
root@gjsg8787jkj:/example# mount -o bind other-work work
root@gjsg8787jkj:/example# ls -R
root@gjsg8787jkj:/example# umount work
root@gjsg8787jkj:/exaple# ls -R  
</pre><h2 id="_5-orchestration-building-systems-with-docker" tabindex="-1"><a class="header-anchor" href="#_5-orchestration-building-systems-with-docker" aria-hidden="true">#</a> 5. Orchestration: Building Systems with Docker</h2><h3 id="registries-in-detail" tabindex="-1"><a class="header-anchor" href="#registries-in-detail" aria-hidden="true">#</a> Registries in Detail</h3><h4 id="what-is-docker-registry" tabindex="-1"><a class="header-anchor" href="#what-is-docker-registry" aria-hidden="true">#</a> What is Docker Registry?</h4><ul><li>Is a program</li><li>Stores layers and images</li><li>Listens on (usually) port 5000</li><li>Maintains an index and searches tags</li><li>Authorizes and authenticates connections (sometimes)</li></ul><h4 id="popular-docker-registry-programs" tabindex="-1"><a class="header-anchor" href="#popular-docker-registry-programs" aria-hidden="true">#</a> Popular Docker Registry Programs</h4><ul><li>The official Python Docker Registry</li><li>Nexus</li></ul><h4 id="saving-and-loading-containers" tabindex="-1"><a class="header-anchor" href="#saving-and-loading-containers" aria-hidden="true">#</a> Saving and Loading Containers</h4><ul><li>docker save</li><li>docker load</li><li>Migrating between storage types</li><li>Shipping images on disks</li></ul><pre>// saves images in tar file
$ docker save -o [file_name].tar.gz imageName:tag imageName1:tag
$ docker rmi imageName:tag imageName:tag
$ docker load -i [file_name].tar.gz
</pre><h3 id="intro-to-orchestration" tabindex="-1"><a class="header-anchor" href="#intro-to-orchestration" aria-hidden="true">#</a> Intro to Orchestration</h3><h4 id="one-container-one-hand-clapping" tabindex="-1"><a class="header-anchor" href="#one-container-one-hand-clapping" aria-hidden="true">#</a> One Container = One Hand Clapping</h4><ul><li>Many orchestriation systems for Docker</li><li>Start containers--and restart them if they fail</li><li>Service discovery--allow them to find each other</li><li>Resource allocation--match containers to computers</li></ul><h4 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> Docker Compose</h4><ul><li>Single machine coordination</li><li>Designed for testing and development</li><li>Brings up all your containers, volumes, networks, etc.., with one command</li></ul><h4 id="kubernetes" tabindex="-1"><a class="header-anchor" href="#kubernetes" aria-hidden="true">#</a> Kubernetes</h4><ul><li>Containers run programs</li><li>Pods group containers together</li><li>Services make pods available to others</li><li>Labels are used for very advanced service discovery</li></ul><h4 id="advantages-of-kubernetes" tabindex="-1"><a class="header-anchor" href="#advantages-of-kubernetes" aria-hidden="true">#</a> Advantages of Kubernetes</h4><ul><li>Makes scripting large operations possible with the <code>kubectl</code> command</li><li>Very flexible overlay networking</li><li>Runs equally well on your hardware or a cloud provider</li><li>Build-in service discovery</li><li>Get started at http://kubernetes.io/</li></ul><h4 id="ec2-container-service-ecs" tabindex="-1"><a class="header-anchor" href="#ec2-container-service-ecs" aria-hidden="true">#</a> EC2 Container Service(ECS)</h4><ul><li>Task Definitions Define a set of containers that always run together</li><li>Tasks Actually makes a container run right now</li><li>Services and expose it to the Net Ensures that a task is running all the time</li></ul><h4 id="advantages-of-ecs" tabindex="-1"><a class="header-anchor" href="#advantages-of-ecs" aria-hidden="true">#</a> Advantages of ECS</h4><ul><li>Connects load balancers(ELBs) to services</li><li>Can create your own host instances in AWS</li><li>Make your instances start the agent and join the cluster</li><li>Pass the docker control socket into the agent</li><li>Provides docker repos- and it&#39;s easy to run your own repo</li><li>Note that containers(tasks) can be part of CloudFormation stacks!</li><li>Get started at https://aws.amazon.com/ecs</li></ul><h2 id="_6-what-s-next" tabindex="-1"><a class="header-anchor" href="#_6-what-s-next" aria-hidden="true">#</a> 6. What&#39;s Next?</h2><ul><li>Kubernetes in AWS (AWS EKS)</li><li>Google Kubernetes Engine</li></ul>`,153),o=[n];function s(l,d){return a(),i("div",null,o)}const c=e(t,[["render",s],["__file","docker.html.vue"]]);export{c as default};
