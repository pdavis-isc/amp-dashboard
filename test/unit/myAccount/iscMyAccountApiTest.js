
(function(){
  'use strict';

  describe('iscMyAccountApi', function(){
    var scope,
      httpBackend,
      deferred,
      api;

    var mockHistory =
    {
      "Events":[
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Today</span>, <span class=\"hsSpanTime\">1:54</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-19 13:54:58",
          "User":"Adam Everyman",
          "position":1
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Today</span>, <span class=\"hsSpanTime\">1:54</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-19 13:54:55",
          "User":"Adam Everyman",
          "position":2
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Today</span>, <span class=\"hsSpanTime\">1:38</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-19 13:38:37",
          "User":"Adam Everyman",
          "position":3
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Today</span>, <span class=\"hsSpanTime\">1:05</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-19 13:05:47",
          "User":"Adam Everyman",
          "position":4
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Today</span>, <span class=\"hsSpanTime\">1:05</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-19 13:05:45",
          "User":"Adam Everyman",
          "position":5
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Today</span>, <span class=\"hsSpanTime\">8:23</span><span class=\"hsSpanAM\">am</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-19 08:23:48",
          "User":"Adam Everyman",
          "position":6
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Today</span>, <span class=\"hsSpanTime\">8:23</span><span class=\"hsSpanAM\">am</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-19 08:23:39",
          "User":"Adam Everyman",
          "position":7
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">5:26</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-18 17:26:21",
          "User":"Adam Everyman",
          "position":8
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">5:22</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-18 17:22:27",
          "User":"Adam Everyman",
          "position":9
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">4:26</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-18 16:26:21",
          "User":"Adam Everyman",
          "position":10
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">4:26</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-18 16:26:17",
          "User":"Adam Everyman",
          "position":11
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">4:23</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-18 16:23:25",
          "User":"Adam Everyman",
          "position":12
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">4:00</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-18 16:00:13",
          "User":"Adam Everyman",
          "position":13
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">4:00</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-18 16:00:12",
          "User":"Adam Everyman",
          "position":14
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">4:00</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-18 16:00:12",
          "User":"Adam Everyman",
          "position":15
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">4:00</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-18 16:00:11",
          "User":"Adam Everyman",
          "position":16
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">4:00</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-18 16:00:07",
          "User":"Adam Everyman",
          "position":17
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">3:59</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-18 15:59:48",
          "User":"Adam Everyman",
          "position":18
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">3:56</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-18 15:56:41",
          "User":"Adam Everyman",
          "position":19
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">3:50</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-18 15:50:10",
          "User":"Adam Everyman",
          "position":20
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">3:46</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-18 15:46:04",
          "User":"Adam Everyman",
          "position":21
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">3:42</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-18 15:42:50",
          "User":"Adam Everyman",
          "position":22
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">3:23</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You viewed your medical record",
          "Time":"2015-02-18 15:23:25",
          "User":"Adam Everyman",
          "position":23
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">3:23</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You viewed your medical record",
          "Time":"2015-02-18 15:23:24",
          "User":"Adam Everyman",
          "position":24
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">3:23</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You viewed your medical record",
          "Time":"2015-02-18 15:23:21",
          "User":"Adam Everyman",
          "position":25
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">3:20</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-18 15:20:21",
          "User":"Adam Everyman",
          "position":26
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">3:19</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-18 15:19:48",
          "User":"Adam Everyman",
          "position":27
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">3:18</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-18 15:18:49",
          "User":"Adam Everyman",
          "position":28
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">3:17</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-18 15:17:33",
          "User":"Adam Everyman",
          "position":29
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">3:16</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-18 15:16:58",
          "User":"Adam Everyman",
          "position":30
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">3:15</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-18 15:15:38",
          "User":"Adam Everyman",
          "position":31
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">3:15</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-18 15:15:15",
          "User":"Adam Everyman",
          "position":32
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">3:14</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-18 15:14:32",
          "User":"Adam Everyman",
          "position":33
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">3:05</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You viewed your medical record",
          "Time":"2015-02-18 15:05:12",
          "User":"Adam Everyman",
          "position":34
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">3:05</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-18 15:05:10",
          "User":"Adam Everyman",
          "position":35
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">2:56</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-18 14:56:38",
          "User":"Adam Everyman",
          "position":36
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">2:50</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-18 14:50:12",
          "User":"Adam Everyman",
          "position":37
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">10:21</span><span class=\"hsSpanAM\">am</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-18 10:21:05",
          "User":"Adam Everyman",
          "position":38
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">Yesterday</span>, <span class=\"hsSpanTime\">10:19</span><span class=\"hsSpanAM\">am</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-18 10:19:44",
          "User":"Adam Everyman",
          "position":39
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">5:28</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-17 17:28:46",
          "User":"Adam Everyman",
          "position":40
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">3:22</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-17 15:22:29",
          "User":"Adam Everyman",
          "position":41
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">3:12</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-17 15:12:45",
          "User":"Adam Everyman",
          "position":42
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">3:12</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-17 15:12:39",
          "User":"Adam Everyman",
          "position":43
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">2:39</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-17 14:39:30",
          "User":"Adam Everyman",
          "position":44
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">2:32</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-17 14:32:24",
          "User":"Adam Everyman",
          "position":45
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">2:28</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-17 14:28:19",
          "User":"Adam Everyman",
          "position":46
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">2:12</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-17 14:12:26",
          "User":"Adam Everyman",
          "position":47
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">1:49</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-17 13:49:35",
          "User":"Adam Everyman",
          "position":48
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">1:48</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-17 13:48:15",
          "User":"Adam Everyman",
          "position":49
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">1:43</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-17 13:43:13",
          "User":"Adam Everyman",
          "position":50
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">1:43</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-17 13:43:08",
          "User":"Adam Everyman",
          "position":51
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">1:42</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-17 13:42:28",
          "User":"Adam Everyman",
          "position":52
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">1:42</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-17 13:42:15",
          "User":"Adam Everyman",
          "position":53
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">1:39</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-17 13:39:31",
          "User":"Adam Everyman",
          "position":54
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">1:38</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-17 13:38:59",
          "User":"Adam Everyman",
          "position":55
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">12:49</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-17 12:49:35",
          "User":"Adam Everyman",
          "position":56
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">12:48</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-17 12:48:15",
          "User":"Adam Everyman",
          "position":57
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">11:04</span><span class=\"hsSpanAM\">am</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-17 11:04:26",
          "User":"Adam Everyman",
          "position":58
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">10:04</span><span class=\"hsSpanAM\">am</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-17 10:04:25",
          "User":"Adam Everyman",
          "position":59
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">5:50</span><span class=\"hsSpanAM\">am</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-17 05:50:00",
          "User":"Adam Everyman",
          "position":60
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">4:50</span><span class=\"hsSpanAM\">am</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-17 04:50:00",
          "User":"Adam Everyman",
          "position":61
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">4:26</span><span class=\"hsSpanAM\">am</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-17 04:26:18",
          "User":"Adam Everyman",
          "position":62
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">4:24</span><span class=\"hsSpanAM\">am</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-17 04:24:13",
          "User":"Adam Everyman",
          "position":63
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">3:26</span><span class=\"hsSpanAM\">am</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-17 03:26:18",
          "User":"Adam Everyman",
          "position":64
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">3:24</span><span class=\"hsSpanAM\">am</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-17 03:24:13",
          "User":"Adam Everyman",
          "position":65
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 17, 2015</span> <span class=\"hsSpanTime\">12:31</span><span class=\"hsSpanAM\">am</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-17 00:31:57",
          "User":"Adam Everyman",
          "position":66
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 16, 2015</span> <span class=\"hsSpanTime\">11:31</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-16 23:31:07",
          "User":"Adam Everyman",
          "position":67
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">4:30</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-13 16:30:05",
          "User":"Adam Everyman",
          "position":68
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">4:30</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-13 16:30:05",
          "User":"Adam Everyman",
          "position":69
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">4:30</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-13 16:30:05",
          "User":"Adam Everyman",
          "position":70
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">4:30</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-13 16:30:04",
          "User":"Adam Everyman",
          "position":71
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">4:30</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-13 16:30:04",
          "User":"Adam Everyman",
          "position":72
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">4:21</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-13 16:21:35",
          "User":"Adam Everyman",
          "position":73
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">4:21</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-13 16:21:35",
          "User":"Adam Everyman",
          "position":74
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">4:01</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-13 16:01:23",
          "User":"Adam Everyman",
          "position":75
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">4:01</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-13 16:01:23",
          "User":"Adam Everyman",
          "position":76
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">4:01</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-13 16:01:16",
          "User":"Adam Everyman",
          "position":77
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">4:01</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-13 16:01:16",
          "User":"Adam Everyman",
          "position":78
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">4:00</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-13 16:00:04",
          "User":"Adam Everyman",
          "position":79
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">4:00</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-13 16:00:04",
          "User":"Adam Everyman",
          "position":80
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">3:54</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-13 15:54:39",
          "User":"Adam Everyman",
          "position":81
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">3:54</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-13 15:54:39",
          "User":"Adam Everyman",
          "position":82
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">3:54</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-13 15:54:29",
          "User":"Adam Everyman",
          "position":83
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">3:54</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-13 15:54:29",
          "User":"Adam Everyman",
          "position":84
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">3:54</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-13 15:54:20",
          "User":"Adam Everyman",
          "position":85
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">3:46</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-13 15:46:13",
          "User":"Adam Everyman",
          "position":86
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">3:30</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-13 15:30:06",
          "User":"Adam Everyman",
          "position":87
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">3:30</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-13 15:30:05",
          "User":"Adam Everyman",
          "position":88
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">3:30</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-13 15:30:04",
          "User":"Adam Everyman",
          "position":89
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">3:30</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-13 15:30:04",
          "User":"Adam Everyman",
          "position":90
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">3:30</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-13 15:30:01",
          "User":"Adam Everyman",
          "position":91
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">12:13</span><span class=\"hsSpanAM\">am</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-13 00:13:02",
          "User":"Adam Everyman",
          "position":92
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 13, 2015</span> <span class=\"hsSpanTime\">12:12</span><span class=\"hsSpanAM\">am</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-13 00:12:46",
          "User":"Adam Everyman",
          "position":93
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 11, 2015</span> <span class=\"hsSpanTime\">4:40</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-11 16:40:37",
          "User":"Adam Everyman",
          "position":94
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 11, 2015</span> <span class=\"hsSpanTime\">2:55</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-11 14:55:09",
          "User":"Adam Everyman",
          "position":95
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 11, 2015</span> <span class=\"hsSpanTime\">2:55</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-11 14:55:07",
          "User":"Adam Everyman",
          "position":96
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 11, 2015</span> <span class=\"hsSpanTime\">2:54</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-11 14:54:56",
          "User":"Adam Everyman",
          "position":97
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 11, 2015</span> <span class=\"hsSpanTime\">2:42</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-11 14:42:05",
          "User":"Adam Everyman",
          "position":98
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 11, 2015</span> <span class=\"hsSpanTime\">2:29</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed out",
          "Time":"2015-02-11 14:29:31",
          "User":"Adam Everyman",
          "position":99
        },
        {
          "DisplayTime":"<span class=\"hsSpanDate\">February 11, 2015</span> <span class=\"hsSpanTime\">1:29</span><span class=\"hsSpanAM\">pm</span>",
          "DisplayType":"You signed on",
          "Time":"2015-02-11 13:29:31",
          "User":"Adam Everyman",
          "position":100
        }
      ]
    };


    var mockSummary = {
      "CreateDate": "2013-10-22 09:03:17.297017",
      "DisplayCreateDate": "October 22, 2013",
      "Email": "spielmanm+93733@gmail.com",
      "Username": "adameveryman"
    };


    var mockProxy = {
      "Proxies": [
        {
          "DateCreated": "2014-10-03",
          "DateModified": "2014-10-03",
          "DisplayExpiration": "October 1, 2015",
          "DisplayName": "BOB LONGDISPLAYNAME RUBLIC",
          "Expiration": "2015-10-01",
          "Expired": 0,
          "FirstName": "BOB",
          "LastModified": "2014-10-03 10:21:28.806338",
          "LastModifiedDisplay": "October 3, 2014",
          "LastName": "RUBLIC",
          "ProxyID": 57,
          "Relation": "other",
          "StagedUserID": "",
          "TimeCreated": "2014-10-03 10:21:28.806331",
          "TimeCreatedDisplay": "October 3, 2014",
          "UserID": 1799
        },
        {
          "DateCreated": "2014-10-01",
          "DateModified": "2014-10-13",
          "DisplayExpiration": "October 1, 2018",
          "DisplayName": "MICK EYMOUSE",
          "Expiration": "2015-10-01",
          "Expired": 0,
          "FirstName": "Mickey",
          "LastModified": "2014-10-03 10:21:28.806338",
          "LastModifiedDisplay": "October 3, 2014",
          "LastName": "Mouse",
          "ProxyID": 57,
          "Relation": "other",
          "StagedUserID": "",
          "TimeCreated": "2014-10-03 10:21:28.806331",
          "TimeCreatedDisplay": "October 3, 2014",
          "UserID": 1799
        }
      ],
      "ProxyFor": [
        {
          "DateCreated": "2014-10-03",
          "DateModified": "2014-10-03",
          "DisplayExpiration": "October 1, 2015",
          "DisplayName": "BEA ADAMS",
          "Expiration": "2015-10-01",
          "Expired": 0,
          "FirstName": "BEA",
          "LastModified": "2014-10-03 10:37:37.453696",
          "LastModifiedDisplay": "October 3, 2014",
          "LastName": "ADAMS",
          "ProxyID": 58,
          "Relation": "other",
          "StagedUserID": "",
          "TimeCreated": "2014-10-03 10:37:37.453688",
          "TimeCreatedDisplay": "October 3, 2014",
          "UserID": 502
        },
        {
          "DateCreated": "2014-11-03",
          "DateModified": "2014-10-07",
          "DisplayExpiration": "October 1, 2017",
          "DisplayName": "BUGS BUNNY",
          "Expiration": "2015-10-01",
          "Expired": 0,
          "FirstName": "BEA",
          "LastModified": "2014-10-03 10:37:37.453696",
          "LastModifiedDisplay": "October 3, 2014",
          "LastName": "ADAMS",
          "ProxyID": 58,
          "Relation": "other",
          "StagedUserID": "",
          "TimeCreated": "2014-10-03 10:37:37.453688",
          "TimeCreatedDisplay": "October 3, 2014",
          "UserID": 502
        }
      ],
      "ProxyMode": 0
    };


    beforeEach( module('iscHsCommunityAngular') );

    // this loads all the external templates used in directives etc
    // eg, everything in **/partials/*.html
    beforeEach( module('isc.templates') );

    // show $log statements
    beforeEach( module( 'iscHsCommunityAngular', function( $provide ){
      $provide.value('$log', console);
    }));

    beforeEach( inject( function( $rootScope, $q, iscMyAccountDataApi, $httpBackend  ){
      scope = $rootScope.$new();
      deferred = $q.defer();
      api = iscMyAccountDataApi;
      httpBackend = $httpBackend;

      //response = angular.copy( mockData );

      // dont worry about calls to assets
      httpBackend.when( 'GET', 'assets/i18n/en_US.json' )
        .respond( 200, {} );

      // mock calls to the config
      httpBackend.when( 'GET', 'assets/configuration/configFile.json' )
        .respond( 200, customConfig );

      // dont worry about calls to home page mocks
      httpBackend.when( 'GET', 'assets/mockData/home/mockPatientData.json' )
        .respond( 200, {} );

      // dont worry about calls to home page mocks
      httpBackend.when( 'GET', 'assets/mockData/home/mockPanelData.json' )
        .respond( 200, {} );

    }));

    // -------------------------
    describe( 'get tests ', function(){

      it( 'should have a function getHistory', function(){
        expect( angular.isFunction( api.getHistory )).toBe( true );
      });

      it( 'should have a function getSummary', function(){
        expect( angular.isFunction( api.getSummary )).toBe( true );
      });

      it( 'should have a function getProxies', function(){
        expect( angular.isFunction( api.getProxies )).toBe( true );
      });

      it( 'should return correct getHistory', function(){


        httpBackend.when( 'GET', 'assets/mockData/myAccount/history.json')
          .respond( 200, mockHistory );
        var promise = api.getHistory(),
          result = null;

        promise.then(function (_in) {
          result = _in;
        }, function (reason) {
          result = reason;

        });
        httpBackend.flush();
        expect(result).toEqual(mockHistory.Events);


      });

      it( 'should return correct getSummary', function(){

        httpBackend.when( 'GET', 'assets/mockData/myAccount/accountSummary.json')
          .respond( 200, mockSummary );
        var promise = api.getSummary(),
          result = null;

        promise.then(function (_in) {
          result = _in;
        }, function (reason) {
          result = reason;

        });
        httpBackend.flush();
        expect(result).toEqual(mockSummary);


      });

      it( 'should return correct getProxies', function(){


        httpBackend.when( 'GET', 'assets/mockData/myAccount/proxies.json')
          .respond( 200, mockProxy );
        var promise = api.getProxies(),
          result = null;

        promise.then(function (_in) {
          result = _in;
        }, function (reason) {
          result = reason;

        });
        httpBackend.flush();
        expect(result).toEqual(mockProxy);




      });



    });


  });

})();

