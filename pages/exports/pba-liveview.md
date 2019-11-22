# Liveview

In Q2 2018, Branch released an overhaul of its liveview, which should make debugging even easier. It includes advanced filtering that allows you to restrict down to specific event names (e.g. PURCHASE) and even individual devices (e.g. IDFA).

This short guide provides an overview of liveview functionality.

## Supported objects

Liveview enables you to debug the following objects:

1. Events
3. Webhook records

`Events` and `Webhook records` allow advanced filtering on a number of dimensions, including per-event and per-device dimensions not surfaced elsewhere on the Dashboard.

## Getting started

### 1. Choose an object

Choose among the supported objects using the tabs at the top of the screen.

  ![liveview object](/_assets/img/pages/exports/pba-liveview/liveview-objects.png)

### 2. Choose event type

If you are viewing `Events`, then be sure to choose the appropriate event type from the dropdown, e.g. `commerce event`.

  ![liveview filter on name](/_assets/img/pages/exports/pba-liveview/liveview-events-filter.gif)

### 3. Add advanced filters (optional)

Add advanced filters. Some of the most useful include `name` (e.g. `PURCHASE`), `feature`, `channel`, `campaign`, and device identifiers like `IDFA`.

  ![liveview filter on name](/_assets/img/pages/exports/pba-liveview/liveview-add-filter.gif)
