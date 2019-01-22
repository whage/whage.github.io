- what makes one private
- what makes one public
    - it is associated with an internet gateway (TODO: find link to docs)
- is it all straightforward?
    - can you put instances with public IPs into a private subnet? what happens?
    - can you put instances without public IPs into a public subnet? what happens?

## is a public IP useless without an internet gateway?

## is an internet gateway useless without a public IP address?
- create a subnet with an attached IGW (this makes it a "public subnet" according to the AWS docs)
- create an instance without a public IP
- try to access a known public address from the instance

## can you use a NAT gateway with a private subnet? can the instances in the private subnet connect to the internet?