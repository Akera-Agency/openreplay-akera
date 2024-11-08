#!/bin/bash
set -x

IP_ADDR=$(ip r | tail -n1 | awk '{print $NF}')


grep -q openreplay.local /etc/hosts || echo "$IP_ADDR openreplay.local" | sudo tee -a /etc/hosts
sudo sed -i "s/.*openreplay.local/${IP_ADDR} openreplay.local/g" /etc/hosts
grep openreplay.local /etc/hosts


sudo apt-get update
sudo apt-get install -y git curl


curl -fsSL https://get.docker.com | sh -
sudo usermod -aG docker "$USER"


git clone https://github.com/Akera-Agency/openreplay-akera.git infra
cd infra/scripts/helmcharts || exit


sudo -u "$USER" git checkout -- init.sh
sed -i 's/INSTALL_K3S_EXEC=\\(.*\\)\\\"/INSTALL_K3S_EXEC=\\1 --docker\\\"/g' init.sh


DOMAIN_NAME=openreplay.local bash init.sh


sudo cp -rf /root/.kube /home/$USER/
sudo cp -rf /home/$USER/infra/scripts/helmcharts/vars.yaml /home/$USER/openreplay-dev/openreplay/scripts/helmcharts/vars.yaml
sudo chown -R $USER:$USER /home/$USER


cat <<EOF

  ################################################
  Openreplay Dev environment preparation completed.
  ################################################

  Steps to do:

    Add IP address from above output to your local resolver

    ## Mac/Linux
    sudo -- sh -c 'grep -q openreplay.local /etc/hosts || echo $IP_ADDR openreplay.local >> /etc/hosts && sudo sed -i "s/.*openreplay.local/${IP_ADDR} openreplay.local/g" /etc/hosts; grep openreplay.local /etc/hosts'

    ## Windows
    - Press the Windows key.
    - Type Notepad in the search field.
    - Right-click Notepad and select Run as administrator.
    - Open c:\\Windows\\System32\\Drivers\\etc\\hosts in Notepad.
    - Add the following line:
      $IP_ADDR openreplay.local
    - Save the changes.

  To Access Openreplay:
    - Open your browser and go to "http://openreplay.local"

EOF
