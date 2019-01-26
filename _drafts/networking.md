This is a short summary and explanation of networking concepts, ones that I struggled to understand for a long time.
Fun fact: most of my epiphanies regarding these topics are thanks to an extraordinary university professor,
Tamás Tiszai who taught me one semester of computer networks in 2018.

# The OSI model
For the early years in my programming career, this was just a buzzword for me.
I could recite the names of the layers of the "Open Systems Interconnect" model but I still didn't get it.

Network communication is the result of different mechanisms that build on each other.
These mechanisms can be thought of as layers sitting on each other. Each layer consumes the services of
the layer just one level below it and adds a new "capability" to the communication while providing its "services" to the layer above it.
OSI is a specification rather than an implementation. It lays down guidelines. The layers of the OSI model are *abstractions*.
The famous "TCP/IP" protocol stack, or "Internet Protocol Suite" is an implementation of the functionality described by the OSI model,
condensed into four layers.
The protocols implementing the layers are called a *protocol stack*. There is a protocol stack "instance" at both ends of the communication
and each layer is in a logical connection with the same layer at the opposite end of the connection.

All the layers together implement *protocol encapsulation*. It means that outbound data starts out at the top layer and
as the protocols pass it down one by one, each one adds a bit of information in the form of *headers*.
These extra bits of information make sure the data can survive its perilous journey through the network.
At the destination, the same happens in reverse: the protocols, starting from the bottom one each trim off and process their respective headers
and pass the stripped data up to the next layer all the way to the application.

Here's a very briefly summary of the OSI layers from the bottom up:
the *physical (1)* layer provides the means to turn data into electrical signals and transmit them
over the wire. The wire itself is considered part of the phyisical layer too.
The *data-link (2)* layer transfers data between adjacent nodes (just one hop). The *network (3)* layer
implements addressing and routes of the data (multiple hops). The *transport (4)* layer makes sure the data is
delivered to the desired service within the destination host. The *session (5)* layer lets us build and tear down long-lived connections
between the two communicating machines. The *presentation (6)* layer mostly handles translation of character sets, compression and encryption.
The *application (7)* layer specifies mechanisms for handling high-level concepts. HTTP is a protocol of the 7th OSI layer, it specifies a
common language to manipulate abstract resources (any kind of data) on servers.

# Routing vs filtering
- "firewall": 
- filtering can happen on different levels, usually:
    - ip address
    - port
# IP routing analogies 1
- "I know which way I came in, why couldn't I just go back?"
- packet: a blind little ball - it doesn't know which direction it went on each hop
- router: it only points to other routers based on routing table
    - the pointed router doesn't necessarily know who pointed to them <- "one way routes"

# IP routing analogies 2
- think of each router / route table as a room with a bunch of doors with an address above each one
    - once you leave through a door, you get into another room with different doors and addresses
        - there might not be a door leading back to the room you came from!

# There is no trust (in the lower layers*)
- acomputer network is a distributed system with no central authority to overlook or enforce naming, addressing rules
- computers ask each other for information
- computers introduce themselves to the other computers
    - they may lie about themselves!
- implications?

# Subnets (the IP protocol)
- for years i struggled with putting the pieces together
- had questions like
    - "why don't we specify a subnet mask for the destination?"
    - "is the subnet mask implied by the IP address?"
- just a logical grouping of IP addressess! nothing more
- they exist at the router's level -> directs traffic
- subnets "don't exist". They are just a way of grouping addresses so that setting routing rules requires less space
    - no machine can say "hey I'm part of this exact subnet"
    - 

# Private IP address ranges
- they are ignored by CONVENTION, not because of technological limitations

# Possibilites of misconfiguration
- overlapping subnets
- what else?

# CIDR notation
Many articles talk about addresses and their subnet masks
    - what is the point of defning an ADDRESS (a DESTINATION) with a SUBNET MASK? Only a router is concerned with a subnet mask.
The host that has the address doesn't care!
- the literature always mentions "subnet identifier" and "host identifier" sections of an IP address
or "the IP address and its `routing prefix`"
    - https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing
    - this only matters inside the router when it compares the destination addresses to its route table entries

# why CIDR notation is problematic
- example: 10.0.0.0/25 defines the same subnet as 10.0.0.0-10.0.100.127 /25 does
    - the mask is 25 bits long which takes up the first 3 octets and one bit from the 4th octet
    - all of the above ranges have 00001010.00000000.00000000.0 in the first 25 bits
        - 10.0.0.0   = 00001010.00000000.00000000.00000000
        - 10.0.0.127 = 00001010.00000000.00000000.01111111

- maybe a note about how important it was for me to learn about the EVOLUTION of computer networks (Tiszai Tamás tanár úr)
in order to understand how hubs, bridges, switches, routers, networks work
    - old ethernet cable - multiple machines connected to the same line - collision domain > 1
        - https://en.wikipedia.org/wiki/Collision_domain
        - https://en.wikipedia.org/wiki/10BASE5 - note: "vampire taps"
        - https://en.wikipedia.org/wiki/10BASE2

# Bridged networking with VMs:
- https://pubs.vmware.com/workstation-9/index.jsp?topic=%2Fcom.vmware.ws.using.doc%2FGUID-BAFA66C3-81F0-4FCA-84C4-D9F7D258A60A.html
    - "Bridged networking configures the virtual machine as a unique identity on the network, separate from and unrelated to the host system. The virtual machine is a full participant in the network. It has access to other machines on the network, and other machines on the network can contact it as if it were a physical computer on the network."
