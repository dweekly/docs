#!/usr/bin/env bash
mkdocs build --config-file mkdocs.yml --clean --verbose
mkdocs build --config-file mkdocs_ko.yml --clean --verbose
mkdocs build --config-file mkdocs_ja.yml --clean --verbose
mkdocs build --config-file mkdocs_zh.yml --clean --verbose
mkdir site/ko; cp -r site_ko/ko/* site/ko
mkdir site/ja; cp -r site_ja/ja/* site/ja
mkdir site/zh; cp -r site_zh/zh/* site/zh

#
#
######BUILD KO ONLY:
#mkdocs build --config-file mkdocs_ko.yml --clean --verbose
#rm -R site/ko
#mkdir site/ko; cp -r site_ko/ko/* site/ko