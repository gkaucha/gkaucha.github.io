# Fundamentals of Docker

Docker is a PaaS product that uses OS level virtualization to deliver
software in packages called containers.
It is also a social platform for us to find and share the containers which are different from virtual machines.


- [Docker and Container?](#section-1)
- [Using Docker](#section-2)
- [Building Docker Images](#section-3)
- [Under the hood](#section-4)
- [Orchestration: Building Systems with Docker](#section-5)
- [What's next?](#section-6)

## 1. What is Docker?

- A client program name Docker.
- A server program that manages a linux system.
- A program that builds containers from code.
- A service that distributes containers.
- A company that does all of above.

#### What is a Container?

A container is a self-contained sealed unit of software. It contains codes, configs, processess, networking, dependencies and operating system.

#### Confirm Docker installation

<pre>
$ docker
$ docker info
</pre>

## 2. Using Docker

#### Docker Flow : Images to containers

```bash
$ docker images                               // list all the docker images
$ docker run -ti ubuntu:latest bash           // takes image and creates a running container containing ubuntu
  # ls
  # cat /etc/lsb-release
  # exit
$ docker ps --format=$FORMAT                  // list running docker images in vertical format
```

- Images are the fixed points.
- _docker run_ creates a running container. When we exit the container, it's still there in the stopped containers.
- to see all the containers : $ docker ps -a
- to see the last stopped container : $ docker ps -l --format=$FORMAT

#### Docker Flow : Containers to Images

Container ID and Image ID are different.

<pre>
$ docker run -ti ubuntu bash                       // creates a new running container containing latest ubuntu
$ touch Hello-World-File                          // create a new file in container
$ exit                                            // exit the container
$ docker ps -l --format=$FORMAT                   // look most recently exited container
$ docker commit [container ID]                    // makes the image out of the container id and prints image ID
$ docker tag [ImageID] [image-name-1]                 // creates repository (image) name tag
$ docker images                                   // list all the docker images
$ docker run -ti [image-name] bash                // runs the image and confirm the file we created earlier
$ docker commit [Container NAMES] [image-name-2]  // creates image name from container name escaping tag
$ docker images
</pre>

#### Run processes in containers

<pre>
$ docker run --rm  -ti ubuntu sleep 5      // starts a container, sleeps for 5, exits and gets deleted
$ docker run -ti ubuntu bash -c "sleep 3; echo all done"     // first starts container process and sleeps for 3 seconds and then echoes

$ docker run -d -ti ubuntu bash     // starts docker as detached
$ docker attach [container NAMES]   // takes back to the specified container
$ docker ps                        // list docker processes
</pre>

Also we can detach from running container using : Ctrl-p Ctrl-q

##### Running more things in container

<pre>
$ docker exec -ti [container NAMES] bash                  // starts  process called bash in an existing container
</pre>

### Manage Containers

#### Logs

<pre>
$ docker run --name example -d ubuntu bash -c "lose /etc/password"   // creates "example" container and tries to execute command
$ docker logs example                                                //prints the logs of example container
</pre>

### Stopping and Removing Containers

<pre>
$ docker kill [container_name]        // kills container to make them stopped
$ docker rm [container_name]          // explicity removes stopped container
</pre>

### Resource Constraints

<pre>
$ docker run --memory maximum-allowed-memory image-name command  // sets memory limit

$ docker run --cpu-shares           // CPU limits related to other containers
$ docker run --cpu-quota          //  CPU limit in general

</pre>

### Note

1. Don't let containers fetch dependencies when they start.
2. Don't leave important things in unnamed stopped containers.

### Container Networking

- Programs is containers are isolated from the internet by default.
- Containers can be grouped into "private" networks.
- Who can connect to whom can be explicitly choosen.
- Expose ports to let connections in
- Private networks to connect between containers.

#### Exposing a Specific Port

- Explicitly specifies the port inside the container and outside

<pre>
$ docker run --rm -ti -p 45678:45678 -p 45679:45679 --name echo-server ubuntu:14.01 bash      // publish the internal and external ports
root@98daf45435:/# nc -lp 45678 | nc -lp 45679   // netcat is a network degugging program / sends bits from 45678 port 45679 port

$ docker run --rm -ti ubuntu:14:14.04 bash   // start docker in a separate terminal
root@574daad335:/# nc host.docker.internal 45678                  // start the host server

$ docker run --rm -ti ubuntu:14.04 bash     // start container in separate terminal
root@72345afda:/# nc host.docker.internal 45679     start the server

// After the host containers are running, test the network with text.
</pre>

#### Exposing Ports Dynamically

- The port inside the container is fixed
- The port on the host is chosen form the unused ports.
- This allows many container running programs with fixed ports
- This is often used with discovery service program

<pre>
$ docker run --rm -ti -p 45678 -p 45679 --name echo-server ubuntu:14.04 bash                    // only sepecified the interanal port of the container
root@237562daf34:/# nc -lp 45678 | nc -lp 45679

// on a separate terminal
$ docker port echo-server        // lists the external port of the container
</pre>

<pre>
$ docker run -p outside-port:inside-port/protocol (tcp/udp)
$ docker run -p 1234:1234/udp

$ docker run --rm -ti p 45678/udp --name echo-server ubuntu:14.04 bash
root@45sf542d:/# nc -ulp 45678

$ docker port echo-server            // list the ports associated
$ nc -u localhost [port number]
hello world!
</pre>

#### Connecting between Containers

##### Connecting directly between containers

<pre>
$ docker network ls            // lists default networks

$ docker network create learning    // creates a network nacmed learning

$ docker run --rm -ti --net learning --name appleserver ubuntu:14.04 bash  // starts the catserver on the learning network
root@542dfa345:/# ping appleserver

$ docker run --rm -ti --net learning --name bananaserver ubuntu:14.04 bash
root@5869daf45:/# ping bananaserver
root@5869daf45:/# ping appleserver
root@5869daf45:/# nc -lp 1234            // start host server at 1234, there will be communication between the apple and banana server

$ docker network create applesonly    // creates "applesonly" network
$ docker network connect  applesonly appleserver   // connects appleserver to applesonly network
</pre>

#### Legacy linking

- links all port, through only one way
- secret env. variables are shared only one way
- depends on startup order
- restarts only sometimes breaks the links

<pre>
$ docker run --rm -ti -e SECRET=theinternetlovescat --name catserver ubuntu:14.04 bash
root@544dfa5jjk4:/# nc -lp 1234

$ docker run --rm -ti --link catserver --name dogserver ubuntu:14.04 bash
root@dafdaf45jkdf:/# nc catserver 1234

// >> there will be communication to and from cat and dog server, however
// >> if we start the nc on dogserver , we cannot communicate
// >> because dogserver copies envvaribales from catserver but cat server doesn't
</pre>

#### Listing Images

Name Structure of images:

<pre>
$ docker images                                 // list images
$ docker commit [container id] [image name]        // tags the container
$ docker commit [container id] [image name]:v2.1   // creates different version

// >>  tagging name structure : registry.example.com:port/organization/image-name:version-tag

$ docker pull              // pulls docker images
$ docker run              // automatically runs  docker pull
$ docker push             // opposite of docker pull

$ docker rmi image-name:tag
$ docker rmi image-name
</pre>

#### Volumes

- Virtual "discs" to store and share data
- Two main varieties : Persistent & Ephemeral
- Not part of images

##### Sharing data with the host

- "Shared folders" with the host
- Sharing a "single file" into a container

<pre>
$ mkdir example
$ docker run -ti -v /patht/to/example/folder:/shared-folder ubuntu bash
root@45fd35fad:/# ls /shared-folder/
root@45fd35fad:/# touch /shared-folder/my-data
root@45fd35fad:/# exit
$ ls exmaple/                          // my-data file will persit even after the conainer exited

$ docker run -ti -v /shared-data ubuntu bash
root@fdsa45235:/# echo hello > /shared-data/data-file

$ docker run -ti --volumes-from [containername] ubuntu bash
root@fdgjlkj4545:/#ls /shared-data/data-file

</pre>

#### Docker Registries

- software that manages and distribute images
- Docker(the company) offers for free

<pre>
$ docker search ubuntu
</pre>

## 3. Building Docker Images

###  What is DockerFile?

- a small "program" to create an image
- it can be run with

<pre>docker build -t name-of-result . </pre>

- the result will be in local docker register.

#### Producing next image with each step

- Each line takes the image from the previous line and makes another image  
- Previous image is unchanged
- It does not edit the state from the previous line
- You don't want large files to span lines or your image will be huge

### Caching with each step

- This is important; watch the build output for "using cache"
- Docker skips lines that have not changed since the last build
- If your first line is "download latest file", it may not always run
- This caching saves huge amounts of time
- The parts that change the must belong at the end of the Dockerfile

### Not Shell Scripts

- Dockerfiles look like shell scripts but they are not shell scripts
- Processes you start on one line will not be running on the next line
- Environment variables persit on the next line. If you use ENV command, **remember that each line is its own call to docker run**

### Building Docker File

#### The most Basic Dockerfile

- Make a file named Dockerfile with following contents:

<pre>
FROM busybox
RUN echo "building simple docker image."
CMD echo "Hello Container"
</pre>

- create Docker image : $ docker build -t hello .
- test if the container works : docker run --rm hello  

#### Installing a Program with Docker Build

- Create a Dockerfile with following contents:

<pre>
FROM debian:sid
RUN apt-get -y update
RUN apt-get -y install nano
CMD ["/bin/nano","/tmp/notes"]
</pre>

- build docker image: $ docker build -t example/nanoer .
- run image : $ docker run --rm -ti example/nanoer

#### Adding a File through Docker Build

- Add the following in the DockerFile

<pre>
FROM example/nanoer
ADD notes.txt /notes.txt
CMD["/bin/nano","notes.txt"]
</pre>

- $ docker build -t example/notes .
- $ docker run -ti --rm example/notes

### DockerFile Syntax

1. FROM
   1. which image to download and start from
   2. must be the first command

2. MAINTAINER
   1. author of this dockerfile
   2. MAINTAINER Firstname Lastname email@example.com

3. RUN
   1. runs the command line, waits for it to finish, and saves the result.

4. ADD
   1. adds local files : Add run.sh /run.sh
   2. adds the contents of tar archices : ADD project.tar.gz /install/
   3. works with URLs : ADD https://abc.example.com/download/1.0/project.rum/project/

5. ENV
   1. Sets env. varibales
   2. during the build and when running the result : ENV DB_HOST=db.production.example.com

6. ENTRYPOINT and CMD
   1. ENTRYPOINT specifies the start of the command to run
   2. CMD specifies the whole command to run
   3. CMD sets the program to run when the container starts.

7. EXPOSE
   1. maps a port into the container : EXPOSE 8080

8. VOLUME
   1. defines shared or ephemeral volumes :
      VOLUME ["/host/pasth/" "/container/path/"]
      VOLUME ["/shared-data"]
   2. avoid defining shared folders in Dockerfiles

9. WORKDIR
   1. Sets the directory the container starts in : WORKDIR /test/
   2. changes directories both for the rest of the Docker file, and in the finished image

10. USER : sets which user the container will run as : USER arthur , USER 1000

### Multi-project Docker File

1. Create the docker file with following contents and build image.

<pre>
FROM ubuntu:16.04
RUN apt-get update
RUN apt-get -y install curl
RUN curl https://google.com | wc -c > google-size
ENTRYPOINT echo google is this big; cat google-size
</pre>

2. Split the docker file into 2 parts which reduces drastically the image size

<pre>
FROM ubuntu:16.04 as builder
RUN apt-get update
RUN apt-get -y install curl
RUN curl https://google.com | wc -c > google-size

FROM alpine
COPY --from=builder /google-size /google-size
ENTRYPOINT echo google is this big; cat google-size
</pre>

### Avoid golden images

#### Prevent the golden image problem

- Install installers in your project
- Have a canonical build that builds everything completely from the scratch.
- Tag your builds with the git hash of the code that built it
- Use small base images, such as Alpine
- Build images you share publicly from Dockerfiles, always
- Dont Leave Password in the deep layer.

### Note

Include the parts of the code that you have changed the most at the end of your Dockerfile, so the parts before them do not need to be redone every time you change that part.

### Note

The `FROM` statement must be the first line in a Dockerfile, and specifies the image to download and start with.

## 4. Under the hood

### What Kernels Do?

- Respond to messages from the hardware
- Start and schedule programs
- Control and organize storage
- Pass messages between programs
- Allocates resources, memory, CPU, network and so on
- Create containers by Docker configuring the kernel

### What Docker Does?

- Program written in Go - an upcoming systems language
- Manage kernel Features
   Uses "cgroups" to contain processes
   Uses "namespaces" to contain networks
   Uses "copy-on-write" filesystems to build images
- Used for years before Docker

### What Docker Really Does?

- Makes scripting distributed systems "easy"

### The Docker Control Socket

- Docker is two programs: a client and a server
- The server receives commands over a socket (either over a network or through a "file")
- The client can even run inside docker itself.

### Networking and namespaces

#### Networking in Brief

- Ethernet: moves "frames" on a wire (or Wi-Fi)
- IP Layer : move packets on a local network
- Routing : forwads packets between networks
- Ports : addresses particular programs on a computer

#### Bridging

- Docker uses bridges to create virtual networks in your computer
- These are software switches
- They control the Ethernet Layer
- You can turn off this protection with
  <pre>$ docker run --net=host options image-name command</pre>

### Routing

- creates "firewall" rules to move packets between networks
- NAT (Network Address Translation)
- Change the source address on the way out
- Change the destination address on the way back in
- "Exposing" a port is really "port forwarding"

<pre>
$ docker run -ti --rm --net=host --privileged=true ubuntu bash
root@efjas544:/# apt-get update && apt-get install iptables
root@efjas544:/# iptables -n -L -t nat

// start next container
$ docker run -ti --rm -p 8080:8080 ubuntu bash

//run the iptables in previous container.
root@efjas544:/# iptables -n -L -t nat
</pre>

### Namespacees

- They allow processes to be attached to private network segments
- These private networks are bridged into a shared network with the rest of the containers
- Containers have virtual network "cards"
- Containers get their own copy of the networking stack

### Processes and cgroups

#### Primer on Linux Processes

- Processes come from othe processes -- parent-chile realtionship
- When a child process exits, it returns an exit code to its parents
- Process Zero is special called *init*, the process that starts the rest

- In Docker, container starts with an init process and vanishes when that process exits

<pre>
$ docker run -ti --rm --name hello ubuntu bash
root@gfg9890:/#

$ docker inspect --format '' hello   // gives out processes id of hello
$ docker run -ti --rm --privileged=true --pid=host ubuntu bash
root@dfaf54546:/# kill [pid]
</pre>

#### Resource Limiting

- Scheduling CPU time
- Memory Allocation limits
- Inherited Limitations and quotas
- Can't escape limits by stating processes

### Storage

#### Unix Storage in brief

- Actual storage devices
- Logical storage devices
- Filesystems
- FUSE filesystems and network filesystems

### Note

The secret of Docker and all of its images : Copy On Write (COWs)

#### Moving Cows

- The contents of layers are moved between containers in gzip files.
- Containers are independent of the storage engine
- Any container an be loaded(almost) anywhere
- It is possible to run out of layers on some of the storage engines

#### Volumes and Bind Mounting

- The Linux VFS(Virutal File System)
- Mounting devices on the VFS
- Mounting directories on the VFS
- Getting the mount order correct : The mount order must be correct; in order to mount a folder and then a file within that folder, you have to do it in this specific order.
- Mounting volumes -- always mounts the host's filesystem over the guest

<pre>
$ docker run -ti --rm --privileged=true ubuntu bash
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
</pre>

## 5. Orchestration: Building Systems with Docker

### Registries in Detail

#### What is Docker Registry?

- Is a program
- Stores layers and images
- Listens on (usually) port 5000
- Maintains an index and searches tags
- Authorizes and authenticates connections (sometimes)

#### Popular Docker Registry Programs

- The official Python Docker Registry
- Nexus

#### Saving and Loading Containers

- docker save
- docker load
- Migrating between storage types
- Shipping images on disks

<pre>
// saves images in tar file
$ docker save -o [file_name].tar.gz imageName:tag imageName1:tag
$ docker rmi imageName:tag imageName:tag
$ docker load -i [file_name].tar.gz
</pre>

### Intro to Orchestration

#### One Container = One Hand Clapping

- Many orchestriation systems for Docker
- Start containers--and restart them if they fail
- Service discovery--allow them to find each other
- Resource allocation--match containers to computers

#### Docker Compose

- Single machine coordination
- Designed for testing and development
- Brings up all your containers, volumes, networks, etc.., with one command

#### Kubernetes

- Containers run programs
- Pods group containers together
- Services make pods available to others
- Labels are used for very advanced service discovery

#### Advantages of Kubernetes

- Makes scripting large operations possible with the `kubectl` command
- Very flexible overlay networking
- Runs equally well on your hardware or a cloud provider
- Build-in service discovery
- Get started at http://kubernetes.io/

#### EC2 Container Service(ECS)

- Task Definitions
  Define a set of containers that always run together
- Tasks
  Actually makes a container run right now
- Services and expose it to the Net
  Ensures that a task is running all the time

#### Advantages of ECS

- Connects load balancers(ELBs) to services
- Can create your own host instances in AWS
- Make your instances start the agent and join the cluster
- Pass the docker control socket into the agent
- Provides docker repos- and it's easy to run your own repo
- Note that containers(tasks) can be part of CloudFormation stacks!
- Get started at https://aws.amazon.com/ecs



## 6. What's Next?

- Kubernetes in AWS (AWS EKS)
- Google Kubernetes Engine
