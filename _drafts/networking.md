This is a short summary and explanation of networking concepts that I believe
few places explain well and that I wish I was shown years ago.

# The OSI model
- the role of each layer (just the main thing)
- "protocol encapsulation" `is the term correct?`

# ip routing analogies 1
- "I know which way I came in, why couldn't I just go back?"
- packet: a blind little ball - it doesn't know which direction it went on each hop
- router: it only points to other routers based on routing table
    - the pointed router doesn't necessarily know who pointed to them <- "one way routes"

# ip routing analogies 2
- think of each router / route table as a room with a bunch of doors with an address above each one
    - once you leave through a door, you get into another room with different doors and addresses
        - there might not be a door leading back to the room you came from!

# there is no trust (in the lower layers*)
- acomputer network is a distributed system with no central authority to overlook or enforce naming, addressing rules
- computers ask each other for information
- computers introduce themselves to the other computers
    - they may lie about themselves!
- implications?

# subnets
- for years i struggled with putting the pieces together
- had questions like
    - "why don't we specify a subnet mask for the destination?"
    - "is the subnet mask implied by the IP address?"
- just a logical grouping of IP addressess! nothing more
- they exist at the router's level -> directs traffic
- subnets "don't exist". They are just a way of grouping addresses so that setting routing rules requires less space
    - no machine can say "hey I'm part of this exact subnet"
    - 

# private IP address ranges
- they are ignored by CONVENTION, not because of technological limitations

# possibilites of misconfiguration
- overlapping subnets
- what else?

# CIDR notation
Many articles talk about addresses and their subnet masks
    - what is the point of defning an ADDRESS with a SUBNET MASK? Only a router is concerned with a subnet mask.
The host that has the address doesn't care!
- the literature always mentions "subnet identifier" and "host identifier" sections of an IP address
or "the IP address and its `routing prefix`"
    - https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing
    - this only matters inside the router when it compares the destination addresses to its route table entries

- maybe a note about how important it was for me to learn about the EVOLUTION of computer networks (Tiszai Tamás tanár úr)
in order to understand how hubs, bridges, switches, routers, networks work
    - old ethernet cable - multiple machines connected to the same line - collision domain > 1
        - https://en.wikipedia.org/wiki/Collision_domain
        - https://en.wikipedia.org/wiki/10BASE5 - note: "vampire taps"
        - https://en.wikipedia.org/wiki/10BASE2

#bridged networking with VMs:
- https://pubs.vmware.com/workstation-9/index.jsp?topic=%2Fcom.vmware.ws.using.doc%2FGUID-BAFA66C3-81F0-4FCA-84C4-D9F7D258A60A.html
    - "Bridged networking configures the virtual machine as a unique identity on the network, separate from and unrelated to the host system. The virtual machine is a full participant in the network. It has access to other machines on the network, and other machines on the network can contact it as if it were a physical computer on the network."
