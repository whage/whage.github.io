# Debugging Orthanc segfaults (2024 Q1)
- strace, gdb
- custom json-parsing routine in lua runtime
- character encoding issues

# Keycloak - cluster-internal communication (2024 Q1)
- tcpdum packet capture on pods that call Keycloak

# Haproxy version update, dataplaneapi cli flag (2024 Q2)
- strace, gdb
- go source, digging to find cli flag defaults

# http request not reaching its destination (2024 Q2)
- azure fw -> haproxy -> traefik -/-> krakend gateway
- kubectl debug with netshoot image
- tcpdump packet capture on traefik pod
- wireshark
  - traefik instantly returned a 404 without even trying to call the next service in the chain
- changed hostname (haproxy configuration error)
